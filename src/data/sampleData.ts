import type { DiaryEntry } from '../types/diary';

export const SAMPLE_ENTRIES: DiaryEntry[] = [
  {
    filePath: '2025/05/2025-05-17-抄经.md',
    meta: { date: '2025-05-17', title: '抄经', location: '龙华寺', tags: ['情感·明', '场所·远方', '表达·写作'] },
    body: '今天去了龙华寺，人很少。正好赶上午后的阳光，大殿前的香炉冒着细烟，空气里有一股很干净的檀香味。\n\n我在偏殿抄了一下午的经。抄的是《心经》，用的是小楷。很久没有这样安静地坐着写字了。窗外的银杏树影子慢慢从左边挪到右边，等我抬头的时候天已经快黑了。\n\n回来路上在想，抄经和写日记到底有什么不同。抄经是重复别人的字，写日记是重复自己的生活。但重复的过程里，有些东西会慢慢沉淀下来。',
    images: [],
  },
  {
    filePath: '2025/11/2025-11-03-一望无际.md',
    meta: { date: '2025-11-03', title: '一望无际', tags: ['情感·明', '成长·自省与转折'] },
    body: '校庆前夕，学校里到处在大兴土木，又正好是深秋，白天很短。一个人去看了很久的湖水。\n\n突然意识到，我已经很久没有为一件事全力以赴了。高中的时候，所有东西都是朝高考打过去的。可是现在，日子突然散了架，变成了很多条很细的线，我每一根都抓不住。\n\n但其实也不是坏事。如果人生是草原而不是赛道，那就不存在掉队这回事。但愿我能记住今天这个想法。',
    images: [],
  },
  {
    filePath: '2025/09/2025-09-19-新程.md',
    meta: { date: '2025-09-19', title: '新程', tags: ['情感·明', '表达·阅读与观看', '成长·自省与转折'] },
    body: '突然觉得，人应该主动去追寻可能。过去我总是怕麻烦别人，也怕迈出第一步。但最近发生的一些事让我觉得：该来的总会来的，不来的，站着等是等不到的。\n\n于是我决定做出一些改变。我现在还不知道会变成什么样。但这个决定的过程——从迷茫到忽然明朗——让我感到了久违的轻松。算是新学期给自己一个交代吧。',
    images: [],
  },
  {
    filePath: '2025/11/2025-11-28-瀚海.md',
    meta: { date: '2025-11-28', title: '瀚海', location: '外滩', tags: ['情感·明', '场所·远方', '表达·阅读与观看'] },
    body: '黄昏骑车到外滩。没带手机，只带了本子和笔。\n\n坐在防汛墙上，看黄浦江上货轮来来去去。江对岸的陆家嘴华灯初上，但我的注意力全在江面上。那水的颜色——不是蓝的，不是绿的，是一种很深很重的灰，像旧的铁皮，一层一层地涌过来。\n\n我突然想到一个词：瀚海。回去后在字典上查了一下，瀚海是戈壁，不是海洋。但那种无边无际的感觉大概是一样的。',
    images: [],
  },
  {
    filePath: '2025/12/2025-12-01-旧履新程.md',
    meta: { date: '2025-12-01', title: '旧履新程', tags: ['情感·明', '场所·日常', '表达·写作'] },
    body: '十二月了。今天收拾鞋柜的时候，翻出来一双初中穿的帆布鞋。鞋底磨得很薄，但鞋面上我当年自己画的图案还在。我试着穿了一下，脚趾已经伸不进去了。\n\n于是我把它放回了鞋柜的角落里。有些事情过去了就是过去了。人不会两次穿同一双鞋，也不会两次经过同一条河。但这句话太重了，我不想把日记写得像在写论文。我只是想说：今天天气很冷，我收拾了屋子，心情不差。',
    images: [],
  },
  {
    filePath: '2026/03/2026-03-12-纸笔间的宁静.md',
    meta: { date: '2026-03-12', title: '纸笔间的宁静', tags: ['情感·明', '场所·日常', '表达·阅读与观看', '成长·关系'] },
    body: '阴雨，图书馆人很少。翻了几页《浮生六记》，沈复写他老婆芸娘把茶叶放在荷花心里，第二天早上拿出来泡茶喝。好浪漫。\n\n我坐在窗前，外面雨不大，打在树叶上的声音很有节奏。不知道多久没有像这样什么都不做，只是看书和看雨了。\n\n下午收到了小鱼发来的消息，问我要不要周末一起吃饭。我没有立刻回复，但我打算去。',
    images: [],
  },
];

export const SAMPLE_CONFIG = {
  vaultPath: '',
  defaultPreset: 'default',
  presets: [{
    name: 'default',
    params: {
      aspectRatio: 0.707, marginTop: 20, marginBottom: 20, marginLeft: 22, marginRight: 22,
      shadow: 'light' as const, fontFamily: 'Noto Serif SC', fontSize: 24,
      lineHeight: 1.9, letterSpacing: 0.02, paragraphSpacing: 0.8,
      textColor: '#2b2420', textIndent: 2, bgColor: '#fff9ee',
      bgTexture: null, bgTextureOpacity: 0, imageMode: 'embed' as const, floatPadding: 12,
    },
  }],
  api: { provider: 'deepseek', baseUrl: 'https://api.deepseek.com', apiKey: '', model: 'deepseek-chat', maxTokens: 4096, temperature: 0.7, topP: 0.9 },
  chatHistory: [],
};
