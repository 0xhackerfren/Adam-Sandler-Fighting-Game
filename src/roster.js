export const fighters = [
  {id:'happy',name:'Happy Gilmore',film:'Happy Gilmore',tag:'The hothead',color:0x245b38,accent:0xe7c34e,skin:0xe2a77e,speed:5.2,power:13,special:'Power Drive',style:'golf',desc:'A long-range golf swing with ridiculous knockback.'},
  {id:'billy',name:'Billy Madison',film:'Billy Madison',tag:'The class clown',color:0xeadc9c,accent:0x3676b8,skin:0xe2af88,speed:6.1,power:10,special:'Recess Rush',style:'school',desc:'Fast footwork and a burst of playground chaos.'},
  {id:'bobby',name:'Bobby Boucher',film:'The Waterboy',tag:'The unstoppable tackle',color:0x852d42,accent:0xffe1a0,skin:0xc88965,speed:4.7,power:15,special:'Water Break',style:'football',desc:'Heavy hits and an energizing water-powered comeback.'},
  {id:'zohan',name:'Zohan',film:'You Don’t Mess with the Zohan',tag:'The stylist',color:0x793c8e,accent:0xf2d8ff,skin:0xc89568,speed:7,power:9,special:'Disco Spin',style:'disco',desc:'Speed, style and a dazzling spinning strike.'},
  {id:'longfellow',name:'Longfellow Deeds',film:'Mr. Deeds',tag:'The small-town hero',color:0x334467,accent:0xeeeeee,skin:0xe5ac82,speed:5.3,power:12,special:'Good Deed',style:'suit',desc:'A balanced brawler with a restorative special.'},
  {id:'hubie',name:'Hubie Dubois',film:'Hubie Halloween',tag:'The thermos guardian',color:0xe07524,accent:0x78472e,skin:0xe0a77b,speed:5.4,power:11,special:'Thermos Blast',style:'halloween',desc:'A defensive specialist with surprisingly versatile equipment.'}
];
export const arenas = [{id:'green',name:'The Back Nine',ground:0x344f38,sky:0x151e31,accent:0x90d46b},{id:'school',name:'After School',ground:0x585369,sky:0x25203a,accent:0xf4b567},{id:'boardwalk',name:'Disco Boardwalk',ground:0x3d315d,sky:0x111328,accent:0xe768d9}];
export const byId = id => fighters.find(f=>f.id===id) || fighters[0];
export const abilities={
 happy:{name:'Power Up',cooldown:9,duration:4,description:'Next heavy or special hit gains bonus power and a dramatic bounce.'},
 billy:{name:'Sugar Rush',cooldown:10,duration:5,description:'Quicker recovery and faster movement for five seconds.'},
 bobby:{name:'Hydrate',cooldown:12,duration:4,description:'Restore 8 health; incoming damage is reduced for four seconds.'},
 zohan:{name:'Style Step',cooldown:8,duration:4,description:'Reset dash cooldown and gain a speed burst.'},
 longfellow:{name:'Hometown Hero',cooldown:13,duration:0,description:'Restore 12 health and 35 guard immediately.'},
 hubie:{name:'Safety First',cooldown:11,duration:5,description:'Refill guard and absorb much of the next incoming hit.'},
};
