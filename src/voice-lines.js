// Original arcade dialogue. No film dialogue or source recordings are used.
export const VOICES = {
  happy: {rate:1, pitch:.78, intro:'All right, tee time!', special:'Send it flying!', win:'That is a beautiful shot!', hurt:'Oh, come on!'},
  billy: {rate:2, pitch:1.18, intro:'Recess just got interesting!', special:'School is out!', win:'Extra credit for me!', hurt:'Aw, man!'},
  bobby: {rate:1, pitch:.78, intro:'Ready for the big game!', special:'Here comes the rush!', win:'Time for a water break!', hurt:'That one stings!'},
  zohan: {rate:2, pitch:.90, intro:'Time to bring the style!', special:'Disco time!', win:'Absolutely fabulous!', hurt:'Watch the hair!'},
  longfellow: {rate:0, pitch:.88, intro:'Well, let us have some fun.', special:'A little hometown magic!', win:'Good game, my friend!', hurt:'Well, gosh!'},
  hubie: {rate:0, pitch:.94, intro:'Safety patrol reporting in!', special:'Thermos to the rescue!', win:'Another safe night!', hurt:'Oh, dear!'},
  announcer: {rate:2,pitch:.76, fight:'Round one. Fight!', next:'Next round. Fight!', ko:'Knockout!', win:'We have a champion!', parry:'Perfect guard!', combo:'Amazing combo!', start:'Sandler Showdown!'},
};
export const voicePath=(id,key)=>`/audio/${id}-${key}.wav`;
