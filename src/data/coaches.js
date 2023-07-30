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
        ],
        imageURL: "./images/wen.jpg",
    },
    {
        name: "小豪",
        lessons: [muaythai, sanda],
        certificates: [
            "2016年WAKO第九屆踢拳道74公斤級-輕接觸冠軍",
            "2016年WAKO第九屆踢拳道79公斤級-半接觸冠軍",
            "2016年WAKO第九屆踢拳道79公斤級-輕接觸亞軍",
            "2020年WAKO-擂台81公斤級K-1項目冠軍",
            "2020年第五屆散打已組成人80公斤級冠軍",
            "2022年泰拳中正盃壯年71+無限量級亞軍",
            "台灣婦幼人身安全防護協會 理長",
        ],
        imageURL: "./images/hao.jpg",
    },
    {
        name: "之翰",
        lessons: [muaythai],
        certificates: [
            "WAKO第十七屆踢拳道超重量級-半接觸亞軍",
            "WAKO第十九屆踢拳道超重量級-半接觸冠軍",
            "2023年散打搏擊青年盃 競技散打85+公斤級冠軍",
            "WBC國際泰拳泰拳國際裁判證",
            "WBC泰拳體適能教練證",
            "WAKO踢拳道國際級認證黑帶二段",
        ],
        imageURL: "./images/zhihan.jpg",
    },
    {
        name: "秀",
        lessons: [boxing],
        certificates: [
            "WAKO第十八屆踢拳道65公斤級-半接觸冠軍",
            "WAKO第十八屆踢拳道65公斤級-輕踢亞軍",
            "BEAT BOXING LV1",
            "BEAT BOXING LV2",
            "WAKO踢拳道國際級認證黑帶二段",
            "WAKO踢拳擊C級裁判",
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
