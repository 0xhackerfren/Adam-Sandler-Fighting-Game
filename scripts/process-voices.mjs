import {readFileSync,writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {VOICES} from '../src/voice-lines.js';
const directory=process.argv[2];
for(const [id,profile] of Object.entries(VOICES))for(const key of Object.keys(profile).filter(k=>!['rate','pitch'].includes(k))){
 const file=join(directory,`${id}-${key}.wav`),raw=readFileSync(file);let at=12,data;
 while(at+8<=raw.length){const name=raw.toString('ascii',at,at+4),size=raw.readUInt32LE(at+4);if(name==='data'){data=raw.subarray(at+8,at+8+size);break;}at+=8+size+(size%2);}
 if(!data)throw Error('No PCM data: '+file);const source=Array.from({length:Math.floor(data.length/2)},(_,i)=>data.readInt16LE(i*2)/32768);
 let start=source.findIndex(n=>Math.abs(n)>.012),end=source.findLastIndex(n=>Math.abs(n)>.012);if(start<0)throw Error('Silent clip: '+file);start=Math.max(0,start-480);end=Math.min(source.length,end+960);const trimmed=source.slice(start,end);const pitch=profile.pitch,shifted=Array.from({length:Math.floor(trimmed.length/pitch)},(_,i)=>{const x=i*pitch,j=Math.floor(x);return (trimmed[j]||0)*(1-(x-j))+(trimmed[j+1]||0)*(x-j);});
 let peak=0;for(const n of shifted)peak=Math.max(peak,Math.abs(n));const gain=Math.min(3,.78/Math.max(.01,peak)),out=Buffer.alloc(44+shifted.length+(shifted.length%2));out.write('RIFF');out.writeUInt32LE(out.length-8,4);out.write('WAVEfmt ',8);out.writeUInt32LE(16,16);out.writeUInt16LE(1,20);out.writeUInt16LE(1,22);out.writeUInt32LE(16000,24);out.writeUInt32LE(16000,28);out.writeUInt16LE(1,32);out.writeUInt16LE(8,34);out.write('data',36);out.writeUInt32LE(shifted.length,40);
 for(let i=0;i<shifted.length;i++){const x=shifted[i]*gain,echo=id==='announcer'?(shifted[i-1050]||0)*.19*gain:0;const fade=Math.min(1,i/160,(shifted.length-i)/320);const n=Math.tanh((x+echo)*1.2)*.93*fade;out[44+i]=Math.round(n*127+128);}writeFileSync(file,out);
}
