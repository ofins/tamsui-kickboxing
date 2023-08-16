const kickboxing = { name: "踢拳", path: "kickboxing" };
const boxing = { name: "拳擊", path: "boxing" };
const muaythai = { name: "泰拳", path: "muay-thai" };
const sanda = { name: "散打", path: "sanda" };
const kidSanda = { name: "兒童散打", path: "kid-sanda" };
const privateLesson = { name: "一對一", path: "one-on-one" };

const coachesData = [
    {
        name: "小文",
        lessons: [kickboxing, boxing],
        certificates: [
            "WAKO踢拳道國際級認證黑帶四段",
            "WAKO踢拳道C級裁判證",
            'WBO國際職業拳擊裁判',
            'CTMMA綜合格鬥丙級裁判證',
            "中華民國拳擊協會C級教練證",
            "中華民國踢拳道協會C級教練",
            "兒童防身術C級教練",
            "台灣婦幼人身安全防護協會-監事"
        ],
        imageURL: "./images/wen.jpg",
    },
    {
        name: "小豪",
        lessons: [muaythai, sanda],
        certificates: [
            "Wako踢拳道國際黑帶三段",
            "散打搏擊黑帶初段",
            "台灣柔術總會段位證書藍帶-寢技",
            "Wako踢拳擊B級裁判",
            "中華民國泰國拳C級裁判",
            "中華民國散打搏擊協會甲級教練資格",
            "台灣婦幼人身安全防護協會-理事",
        ],
        imageURL: "./images/hao.jpg",
    },
    {
        name: "之翰",
        lessons: [muaythai],
        certificates: [
            "WAKO踢拳道認證黑帶二段",
            "WBC國際泰拳泰拳國際裁判證",
            "WBC泰拳體適能教練證",
            "WAKO第十七屆踢拳道超重量級-半接觸亞軍",
            "WAKO第十九屆踢拳道超重量級-半接觸冠軍",
            "2023年散打搏擊青年盃 競技散打85+公斤級冠軍"
        ],
        imageURL: "./images/zhihan.jpg",
    },
    {
        name: "秀",
        lessons: [boxing],
        certificates: [
            "WAKO踢拳道認證黑帶二段",
            "BEAT BOXING LV1",
            "BEAT BOXING LV2",
            "WAKO踢拳擊C級裁判",
            "中華民國踢拳道協會C級教練",
            "WAKO第十八屆踢拳道65公斤級-半接觸冠軍",
            "WAKO第十八屆踢拳道65公斤級-輕踢亞軍"
        ],
        imageURL: "./images/show.jpg",
    },
    // {
    //     name: '阿寶',
    //     lessons: [boxing],
    //     certificates: ['110年WAKO全國錦標賽半接觸組第一名', '110年WAKO全國錦標賽輕踢組第一名', '102年全國教育盃拳擊錦標賽第一名', '101年全國總統盃拳擊錦標賽第一名', '101年青年盃拳擊錦標賽第一名', 'WAKO踢拳道國際級認證黑帶二段', 'WAKO踢拳道C級裁判證'],
    //     imageURL: './images/13.jpg'
    // },
    // {
    //     name: '饅頭',
    //     lessons: [privateLesson],
    //     certificates: ['108年新北市市中運自由式角力第二名', '108年台北市青年盃自由式角力第二名', '108年秋季菁英盃角力錦標賽希羅式第二名', '109年新北市市中運柔道冠軍', '109年新北市市中運希羅式角力冠軍', '111年新北市市中運柔道冠軍', '中華民國柔道總會黑帶初段'],
    //     imageURL: './images/13.jpg'
    // },
    // {
    //     name: '建成',
    //     lessons: [privateLesson],
    //     certificates: ['108年新北市市中運自由式角力第二名', '108年台北市青年盃自由式角力第二名', '108年秋季菁英盃角力錦標賽希羅式第二名', '109年新北市市中運柔道冠軍', '109年新北市市中運希羅式角力冠軍', '111年新北市市中運柔道冠軍', '中華民國柔道總會黑帶初段'],
    //     imageURL: './images/13.jpg'
    // },
];

export default coachesData;
