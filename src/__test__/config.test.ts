import { defaultConfig, getDefaultConfig, mergeConfig } from '@/config/config';
import { mergeCommon } from '@/config/utils';

const cookie = `PVID=2; b_lsid=DC1063E54_17E335AC2B4; innersign=1; buvid3=3EC0C0B1-BE9D-A31D-634B-DE9FEBBE438293482infoc; i-wanna-go-back=-1; b_ut=5; _uuid=5CDSADAE8-E10BF-15D4-3549-643624494A3294315infoc; buvid_fp=9D06706F-BDAF-47DB-83C2-B80304C60D9ASDJH623infoc; sid=80t40970; fingerprint=9bf21321335233b0d958e26edff5c6; buvid_fp_plain=9D06706F-BDAF-47DB-83C2-B80304C60D9C167623infoc; SESSDATA=8fd23sdasdb3912312552%asdsa%2C236f1%2A11; bili_jct=asjdklha17238213b213gc213; DedeUserID=11111111; DedeUserID__ckMd5=sjakdjashdjsagdjsdsd; bp_video_offset_415244372=29738123716235135; CURRENT_FNVAL=2000; blackside_state=0; CURRENT_BLACKGAP=0; rpdid=0zbfAHYASDASDSDM|X9|3w1N5JkB`;

// 是否成功处理兼容
const userConfig = {
  cookie,
  intimacy: {
    liveSendMessage: true,
    liveShare: false,
    liveLike: false,
    whiteList: [1],
    blackList: undefined,
  },
};
const theConfig = {
  BILIJCT: 'asjdklha17238213b213gc213',
  accessKey: '',
  USERID: 11111111,
  cookie,
  createCookieDay: undefined,
  message: {
    br: '\n',
    onlyError: false,
    email: {
      host: 'smtp.163.com',
      port: 465,
    },
    api: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 5000,
      url: '',
      proxy: {
        host: '',
        port: 443,
        auth: '',
      },
      data: {},
    },
    pushplusToken: process.env.PUSHPLUS_TOKEN,
  },
  function: {
    silver2Coin: true,
    liveSignTask: true,
    addCoins: true,
    mangaTask: false,
    shareAndWatch: true,
    supGroupSign: false,
    judgement: false,
    charging: false,
    getVipPrivilege: false,
    giveGift: false,
    matchGame: false,
    liveLottery: false,
    liveRedPack: false,
    liveIntimacy: false,
    bigPoint: false,
    batchUnfollow: false,
    activityLottery: false,
    useCouponBp: false,
    dailyBattery: false,
    watchLink: false,
    blink: false,
    liveDm: false,
    liveWeekTask: false,
  },
  apiDelay: [2, 6],
  userAgent: '',
  dailyRunTime: '17:30:00-23:40:00',
  match: {
    coins: 2,
    selection: 1,
    diff: 7,
  },
  jury: {
    once: true,
    opinion: true,
    opinionMin: 3,
    notOpinion: [3],
    vote: [0, 0, 1],
    waitTime: 20,
    insiderWeight: 0.8,
    insiders: [0, 1],
    anonymous: [0, 1],
    newTrigger: true,
    async: false,
  },
  log: {
    pushLevel: 'verbose',
    consoleLevel: 'debug',
    fileLevel: 'debug',
    useEmoji: true,
    fileSplit: 'day',
  },
  limit: {
    level6: true,
    coins5: true,
  },
  couponBalance: {
    mid: 11111111,
    presetTime: [10, 20],
    use: '充电',
  },
  gift: {
    mids: [],
    id: [1, 30607, 30426, 31531, 31674],
    name: [],
    all: false,
    expire: true,
  },
  coin: {
    customizeUp: [],
    targetLevel: 6,
    stayCoins: 0,
    targetCoins: 5,
    upperAccMatch: false,
    src: ['自定义UP', '特别关注', '关注', '首页推荐', '分区排行'],
  },
  manga: {
    sign: true,
    buy: false,
    read: true,
    mc: [],
    name: [],
    love: true,
  },
  liveDm: {
    delay: [8, 13],
    num: 0,
    roomid: [],
  },
  exchangeCoupon: {
    num: 1,
    delay: 2000,
    keepAmount: 0,
    startHour: 0,
  },
  exchangeBigPoint: {
    delay: 2000,
    keepAmount: 0,
    name: [],
    token: [],
  },
  blink: {
    areaId: 0,
    parentId: 0,
    roomid: 0,
    time: 33,
    title: '',
  },
  lottery: {
    excludeAward: [
      '舰',
      '船',
      '航海',
      '代金券',
      '优惠券',
      '自拍',
      '照',
      '写真',
      '图',
      '提督',
      '车车一局',
      '再来一局',
      '游戏道具',
    ],
    includeAward: ['谢'],
    blackUid: [65566781, 1277481241, 1643654862, 603676925],
    moveTag: '天选时刻',
    pageNum: 2,
    actFollowMsg: 'read',
    scanFollow: undefined,
    skipNeedFollow: false,
    mayBeWinMsg: true,
  },
  redPack: {
    source: 0,
    uri: '',
    intervalActive: 60,
    restTime: [-1, -1],
    linkRoomNum: 1,
    riskTime: [-1, -1],
    riskSleepTime: -1,
    totalNum: -1,
    dmNum: [10],
    moveUpInWait: true,
    moveTag: 'rp关注',
    actFollowMsg: 'read',
    noWinNum: 10,
    riskNum: 5,
  },
  unFollow: {
    delay: 3,
    restTime: [20, -1],
    totalNum: -1,
    tags: ['天选时刻', 'rp关注'],
  },
  intimacy: {
    liveSendMessage: true,
    liveShare: false,
    liveLike: false,
    whiteList: [1],
    limitFeed: 1500,
    blackList: [],
    liveHeart: false,
    skipNum: 10,
    isRetryHeart: false,
    dm: {},
  },
  bigPoint: {
    isRetry: 20,
    isWatch: true,
    watchDelay: 40,
  },
  activityLottery: {
    list: [],
    isRequest: true,
    delay: [1.8, 3.2],
    bangumi: false,
    follow: false,
    proxyPrefix: 'https://ghproxy.com/',
    customUrl: '',
  },
  watchLink: {
    area: [
      [3, 321],
      [3, 549],
    ],
    areaId: undefined,
    heart: true,
    parentId: undefined,
    roomid: [],
    tcp: false,
    time: 30,
    uid: [],
    wss: false,
  },
  charge: {},
};
const newConfig = mergeConfig(userConfig);

describe('config 配置测试', () => {
  test('defaultConfig 引用不一致', () => {
    expect(getDefaultConfig()).not.toBe(defaultConfig);
    expect(getDefaultConfig().message.email).not.toBe(defaultConfig.message.email);
  });

  test('最终结果符合预期？', () => {
    expect(newConfig).toEqual(theConfig);
  });

  test('mergeCommon 测试', () => {
    expect(mergeCommon([{ cookie: '1231' }, { cookie: '' }])).toEqual([
      { cookie: '1231' },
      { cookie: '' },
    ]);

    expect(
      mergeCommon([
        { cookie: '1231' },
        {
          __common__: false,
        },
        { cookie: '' },
      ]),
    ).toEqual([{ cookie: '1231' }, { cookie: '' }]);

    expect(
      mergeCommon([
        {
          cookie: '1231',
          message: {
            pushplusToken: '5555555555',
          },
        },
        { cookie: '', manga: { buy: true } },
        {
          __common__: true,
          cookie: '__common__',
          message: {
            pushplusToken: '123',
          },
        },
      ]),
    ).toEqual([
      {
        cookie: '1231',
        message: {
          pushplusToken: '5555555555',
        },
      },
      {
        cookie: '',
        manga: { buy: true },
        message: {
          pushplusToken: '123',
        },
      },
    ]);
  });
});
