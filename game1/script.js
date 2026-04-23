// ======================= 独立映射卡片库 =======================
    const keywordCardMap = {
        // === 简历类 ===
        "阿尔弗雷德·F·琼斯": "【阿尔弗雷德·F·琼斯】阿尔弗雷德·F·琼斯，是公司新来的实习生。",
        "亚瑟·柯克兰": "【亚瑟·柯克兰】亚瑟·柯克兰，在琼斯公司工作的一名社畜'。",
        "hero": "【hero】你的搜索被公司的安保系统阻断了。这似乎是一位在琼斯公司系统内有着较高权限的人。",
        "lord": "【lord】你浏览了员工专访上面的相关评价，似乎是一位工作能力很强的职员。",
        "1": "【1】这个代号曾经在琼斯公司的多个记录中出现，似乎是为了保护机密。",
        "44": "【44】这个代号曾经在琼斯公司和柯克兰家族的文件中出现，似乎是为了保护机密。",
        "19": "【19】这个代号曾经在琼斯公司的多个记录中出现，似乎与年龄有关。（暗号已解锁）",
        "23": "【23】这个代号曾经在琼斯公司的多个记录中出现，似乎与年龄有关。（暗号已解锁）",
        "社息": "【社息】即社长的儿子，他是琼斯公司的合法继承人。",
        "社畜": "【社畜】这个词语最早源自日语，主要是指顺从公司安排，生活几乎被工作占据的上班族。\n\n也许你好奇的并不是这个，试试继续搜索吧。",
        "暗号": "【暗号】四个神秘的数字。",
        
        // === 身份类 ===
        "实习生": "【实习生】琼斯公司的新实习生据说是个刚毕业不久的小伙子。",
        "柯克兰家族": "【柯克兰家族】柯克兰家族曾经是琼斯公司的重要股东之一，与公司有着深厚的渊源。\n\n但近些年活跃的柯克兰家族成员已经很少了。",
        "常春藤盟校": "【常春藤盟校】由几所世界顶级的大学组成。传闻中琼斯公司社长的儿子就是毕业于常春藤盟校",
        "摇滚歌手": "【摇滚歌手】44每周二、四、六晚上会在公司楼下的蓝绿音符酒吧驻唱，顺便蹭几杯酒喝。",
        "驻唱": "【驻唱】44每周二、四、六晚上会在蓝绿音符酒吧驻唱，顺便蹭几杯酒喝。",
        "旧书借阅卡": "【旧书借阅卡】一本考古学书籍背后粘贴的借阅登记表上面，AFJ和A.K.两个名字交替出现。'",
        "钥匙": "【钥匙】据说有一次19找不到储物箱的钥匙，最后在lord的身上找到了。",
        "蓝绿音符酒吧": "【蓝绿音符酒吧】你搜到了一张拍摄于昏暗酒吧的照片，舞台上身着红衣的驻唱歌手正低头拨动琴弦，想必A.K.就是这位。'",
        "相遇": "【相遇】阿尔弗雷德入职的第一天，在电梯里不小心按到了顶层的火警报警器。\n\n在刺耳的警报声中，亚瑟看着这个把咖啡洒在自己名贵西装上的笨蛋，第一次产生了辞职的冲动。",
        
        // === 纸质文件类 ===
        "大西洋时尚特刊": "【大西洋时尚特刊】这一页的主题是“如何为你的伴侣选择领带”。在模特的领带示意图旁，有人用红笔圈出了一个深蓝色斜纹款式。",
        "汉堡的匿名投诉": "那个实习生总是把汉堡包装纸丢在Lord的桌子上，包装纸背面还画着奇怪的爱心图案",
        "领带": "【领带】lord的领带总是系得整整齐齐，领带的款式是深绿色条纹。",
        "午休": "【午休】Hero的午休时间很长，有时两小时。他经常去财务部'请教问题'。",
        "加班到半夜": "【加班到半夜】亚瑟经常加班到半夜。财务部月底结账时，他有时凌晨两点才离开公司。",
        "失物招领启事": "【失物招领启事】琼斯公司1楼大厅布告栏上贴着一张失物招领启事，下面附的电话号码尾号是19'",
        "储物柜的红茶味": "【储物柜的红茶味】有人描述自己遇到了一件怪事，1号储物柜最近经常飘着一股淡淡的红茶味，\n\n但他记得里面明明堆满了运动器材和可乐罐。'",
        "布告栏": "【布告栏】琼斯公司1楼大厅的布告栏上贴着各种通知和启事。",
        "大都会生活": "【加班】“……我的合作伙伴的活力让我感到困扰，却也让我无法移开视线。\n\n我该如何告诉一个自诩为Hero的男人，他其实不需要拯救世界，只需要在我喝红茶时安静地坐一会儿？”",
        "社交软件": "【社交软件】一条激动的发言：“Hero的手机里全是汉堡照片，但你们绝对猜不到他的社交软件置顶是谁。",
        "置顶的真相": "【置顶的真相】你在[社交软件]的爆料人主页看到了原图，那是一张粗眉毛的照片。",
        
        // === 言论类 ===
        "戴维": "【戴维】戴维，阿尔弗雷德的私人助理。他叹了口气：'我的老板是个好人，但他真的……不太靠谱。'",
        "来自D的爆料": "【来自D的爆料】'老板上周让我去书店买一本诗集和一本……呃，内容我不太好意思说。'",
        "深夜加班的1923 频段": "【深夜加班的1923 频段】昨晚凌晨两点，财务部的灯还亮着。我推门进去，看到23正对着电脑揉眉心，而那个Hero竟然在地板上睡着了，脑袋就枕在23身上……'",
        "茶水间的传闻": "听说咱们公司的 1 号选手今天又被 Lord 赶出来了。19 岁的小年轻就是体力好，被骂了还能绕着公司跑两圈。'",
        "关于拨号键的传闻": "【关于44号拨号键的传闻】Hero的手机屏幕虽然永远是花里胡哨的汉堡壁纸，但他设置的‘一键拨号’快捷键只有 44，这是什么快餐热线吗？'",
        "置顶的真相": "【霍华德困惑】霍华德：'柯克兰先生最近排练总是迟到。他说'有个实习生总来酒吧找我'。哪个实习生啊？'",
        "午餐协议": "【午餐协议】重大发现！19和44遵守了午餐协议！他们今天中午吃的是同一家汉堡店的外卖！'",
        "助理": "【助理】戴维和霍华德是公司的两个知名助理，他们分别为Hero和Lord工作。两人都对自己的老板非常忠诚，但也经常吐槽老板的怪癖。'",
        
        // === 性格类 ===
        "怕鬼": "【怕鬼】阿尔弗雷德其实怕鬼。以前的万圣节他总是躲在亚瑟身后。为了安抚他，亚瑟最后读了一段古文书里的诗。'",
        "自称": "【自称】阿尔弗雷德的口头禅是：'我可是hero！' 但他说这话的时候通常正在遇到麻烦。'",
        "鬼故事": "【鬼故事】公司万圣节派对放恐怖片，阿尔弗雷德全程躲在亚瑟身后。亚瑟说：'笨蛋，都是假的。'",
        "笨蛋": "【笨蛋】亚瑟经常骂人'笨蛋'，尤其是对阿尔弗雷德。'",
        "爱照顾人": "【爱照顾人】'柯克兰先生会记住每个人的口味。他知道Hero喜欢双层芝士汉堡加冰可乐。'",
        "搜素记录": "【搜素记录】琼斯电脑的搜索记录里除了“市场占有率”等名词，最后一行赫然写着：'23岁的人会喜欢什么？''",
        "员工专访": "【员工专访】页面上是 Lord的职业照，他神情严肃。与之相对的采访摘要旁，有人用粗笔画了小猫的胡子和爱心图案。'",
        "口是心非": "【口是心非】两个人都是口是心非的高手。对此33的评价是：'哥哥早就看不下去了，明明都那么在意对方，却谁也不肯先开口。'",
        "休息室的冰箱": "【休息室的冰箱】在一堆整齐标注着‘Arthur Kirkland’的养生茶包中间，极其突兀地塞进了一盒印着‘Alfred Jones’名字的芝士酱。。”",
        
        // === 日常类 ===
        "送回家": "【送回家】上周五晚上，Hero的车停在公司楼下。Lord加班结束后，拉开车门坐了进去。",
        "留宿": "【留宿】第二天早上，有人看到Hero和Lord一起从Hero家的方向走来上班。Lord换了件衬衫。",
        "顺路": "【顺路】其实两人回家的路并不顺。Hero要绕三个街区才能送Lord到家。",
        "一起加班": "【一起加班】项目截止前，两人一起加班到深夜。整个楼层只剩他们办公室的灯还亮着。",
        "楼梯间": "【楼梯间】有人说看到他们在楼梯间拥抱。但没人看清，也许只是看错了。",
        "手机壁纸": "【手机壁纸】热心网友：'说到手机壁纸，选用心仪之人的照片是一件很浪漫的事情吧。'",
        "超人电影": "【超人】阿尔弗雷德总是提出一些超人电影一样的方案，而亚瑟则会附赠三个小时的毒舌讲座。'",
        "万圣节派对": "【万圣节派对】琼斯公司每年举办的万圣节派对，19和23会趁此机会进行服装竞赛",
        "圣诞晚宴": "【圣诞晚宴】公司每年的圣诞晚宴上，都会有一个恶作剧电话打到lord的手机上。”",
        "琼斯公司": "【琼斯公司】主营魔法道具制造与售卖，似乎有着神秘的公司文化。",
        
        // === 喜好类 ===
        "汉堡": "【汉堡】阿尔弗雷德的最爱：双层芝士汉堡配冰可乐。他每天午餐都吃这个。",
        "可乐": "【可乐】hero喝可乐的声音总是很响。",
        "汉堡店": "【汉堡店】你搜索到的消息显示，阿尔弗雷德每天会带两份汉堡。'",
        "喝茶习惯": "【喝茶习惯】亚瑟只喝大吉岭红茶，85度水温，加糖加奶。他的工位上有一套完整的茶具。",
        "茶具": "【茶具】亚瑟的骨瓷杯是限量版。Hero的办公桌上，有一个一模一样的。",
        "考古": "【考古】阿尔弗雷德的兴趣是考古学。他的书架上有十几本考古书籍。",
        "刺绣": "【刺绣】亚瑟的爱好是刺绣。最近在绣一个很奇怪的东西，好像是……一顶王冠？",
        "泰迪熊": "【泰迪熊】柯克兰先生最喜欢的玩偶是一只有着蓝色眼睛的泰迪熊。",
        "电话簿": "【电话簿】你翻阅了公司的电话簿，发现lord的手机尾号是19，而hero的手机尾号是23。'",

        // === 物品类 ===
        "大吉岭红茶": "【大吉岭红茶】大吉岭红茶是英国王室御用茶，承载着 “日不落帝国” 的奢华茶饮文化记忆。'",
        "牙买加蓝山": "【牙买加蓝山】蓝山咖啡豆产量稀少、价格昂贵，通常只作为正式礼品出现。没人想到会出现在普通职员的办公桌上。",
        "蓝山咖啡豆": "【蓝山咖啡豆】蓝山咖啡产自原英属牙买加，是英国加勒比殖民史的活化石。传说是英国士兵看见山脉被加勒比海蓝光笼罩，因而得名“Blue Mountain”'",
        "麦当劳": "【麦当劳】英国是麦当劳在欧洲的最大市场，在英国是美国文化输出的核心象征，被视为 “美式生活方式” 代表。\n\n麦当劳借英国在英联邦的影响力，将英式本土化经验复制到加拿大、澳大利亚等英联邦国家，形成英美文化圈快餐标准。'",
        "汉堡王": "【汉堡王】汉堡王的所有权曾长期被英国公司掌控，吉祥物的设计灵感明显借鉴了英国王室形象。\n\n如果你也对汉堡大战感兴趣，那就来接受‘美式大汉堡’的攻击吧！'",
        "英区改良版": "【英区改良版】英国本土的麦当劳会根据本土口味调整酱料，就像某些人明明不喜欢汉堡，却还是愿意陪着吃。",
        "圣乔治日": "【圣乔治日】清教徒乘五月花号赴美时，船桅悬挂圣乔治十字旗，后来也影响了美国早期州旗设计'",
        "桌子上的痕迹": "【桌子上的痕迹】Hero的桌子上有杯垫留下的痕迹，是一个圆形。Lord的桌子上也有，是方形。",
        "杯垫": "【杯垫】你根据搜到的图片仔细观察，Hero的杯垫上印着大本钟和伦敦塔桥，Lord的杯垫上印着自由女神像。",
        "大本钟": "【大本钟】1932 年起，BBC 通过帝国服务台（今世界服务台）向全球广播大本钟钟声。\n\n即使在二战期间，伦敦遭德军轰炸，大本钟仍坚持报时。'",
        "伦敦塔桥": "【伦敦塔桥】1997 年 5 月，美国总统克林顿访英，与布莱尔首相餐后经塔桥；\n\n因为迟到，桥按惯例为货船 “格拉迪斯号” 开启，车队被开合桥一分为二，安保一度紧张；\n\n塔桥方称曾联系美使馆未获回应，这成了英美外交史上著名轻松插曲，",
        "烫痕": "【烫痕】Lord的骨瓷杯底有一道极浅的烫痕。据说是Hero第一次笨拙泡茶时留下的，他却一直没有换掉。",
        "水温传感器": "【水温传感器】系统检测到，每当1号工牌靠近茶水间，热水器的出水温度就会自动锁定在 85°C。\n\nIT部解释称：“这是为了防止某位冒失的Hero再次用沸水烫坏Lord昂贵的茶杯。'",
        "电影票": "【电影票】考古学书籍旁常年放着一本翻旧的影集。册间的电影票上，AFJ 与 A.K. 的字迹交替出现。'",
        "周年庆摄影集": "【周年庆摄影集】一张抓拍照片。画面中，19岁的阿尔弗雷德正试图给23岁的亚瑟戴上一顶滑稽的派对纸帽子。\n\n照片背面是‘英雄与领主’的第1923次非正式会议。",
       
        // === 羁绊类 ===
        "罢工少女的恋爱指南": "【罢工少女的恋爱咨询】经过咨询，罢工少女建议你向'眉毛'借阅一本时尚杂志。",
        "弗朗西斯的恋爱咨询": "【弗朗西斯的恋爱咨询】经过咨询，弗朗西斯告诉你，笨蛋情侣连告白都藏在字母里。",
        "couples": "【couples】作为公司的积极罢工业务，弗朗西斯积极地向情侣们提供love解答。",
        "love解答": "【love解答】'对于hero来说，可要好好想想H和S这两个字母'",
        "轻小说": "【轻小说】菊曾经的职业是一名作家，他写了一本关于公司员工情感生活的轻小说。",
        "小时候的照片": "【小时候的照片】有人搜刮到了19和23小时候的照片。照片里两个小男孩站在一起，笑得很开心。背面写着：'永远在一起。",

        // === 特殊关键词 ===
        "工位上的书": "【亚瑟的工位】亚瑟的桌上永远摆着两本画风极其不统一的书。一本像是在诅咒谁，一本像是在勾引谁。",
        "古文书": "【古文书】这是一本看起来很旧的古文书，封面已经褪色，但书脊保存完好。大家都以为那是亚瑟在研究什么古老咒语，里面似乎夹着一张借阅卡。",
        "时尚杂志": "【时尚杂志】一本封面鲜艳的时尚杂志，侧页隐约露出四个大写英文字母，里面的品牌似乎在谁的吐槽中出现过。",
        "菊": "【菊】你认识了菊，是公司里一位路过的老爷爷。他的爱好是写小说'",
        "弗朗西斯": "【弗朗西斯】你认识了弗朗西斯。被称为'魔法罢工少女'的人原来就是他'",
        "33": "【33】代号的使用者是琼斯公司的一位法籍艺术总监'",
        "戴维": "【戴维】你认识了戴维，他是阿尔弗雷德的私人助理，胸前时常别着一朵蓝花。'",
        "霍华德": "【霍华德】你认识了霍华德，他是亚瑟的助手，虽然不常出现，但对老板非常忠诚'",
        "马修": "【马修】你认识了马修。等等，这是谁啊？'",
        "四个英文字母": "【四个英文字母】你想到hero和lord的名字都是四个字母，难道神秘的四个字母也是某种暗号吗？'",
        "华兹华斯的诗集": "【华兹华斯的诗集】扉页上有一行伦敦花体英文手写字：'愿我们永远是彼此的光。'",
        "EROS": "【EROS】杂志夹着一张便签：'下次别藏在我抽屉里了，笨蛋。周末老地方见。'背面：'我也想你。'"
    };
    
    // 假线索关键词
    const fakeKeywords = ["咖啡机","社长","工资条","披萨","停车场","电梯","空调","绿化","团建","年会","董事长"];
    
    // 罢工相关关键词
    const strikeKeywords = ["罢工","工会","抗议","加班费","不工作","维权","劳动法"];
    
    // 负面情绪关键词
    const negativeKeywords = ["恶心","糟糕","无聊","厌烦","讨厌","垃圾","受不了","虚伪","没意思","放弃"];
    
    // 淫秽关键词
    const dirtyKeywords = ["淫秽","色情","黄","av","成人","床戏","裸照","18禁"];

    // 游戏状态
    let gameMode = "story";
    let remainingSearches = 100;
    let gameEnded = false;
    let deskUnlocked = false;
    let kikuFound = false, franFound = false;
    let dirtyCount = 0, negativeCount = 0, strikeCount = 0;
    let foundClues = [];
    let searchedKeywords = new Set();

    // DOM 元素
    const searchInput = document.getElementById("searchKeyword");
    const searchBtn = document.getElementById("searchBtn");
    const resultArea = document.getElementById("resultArea");
    const statusLine = document.getElementById("statusLine");
    const chainProgressDiv = document.getElementById("chainProgress");
    const clueListDiv = document.getElementById("clueList");
    const userNotes = document.getElementById("userNotes");
    const resetBtn = document.getElementById("resetGameBtn");
    const modeBtns = document.querySelectorAll(".mode-btn");
    
    let floatBtn = null;

    function saveToLocal() { localStorage.setItem("jones_notes", userNotes.value); }

    function updateUI() {
        modeBtns.forEach(btn => {
            if(btn.dataset.mode === gameMode) btn.classList.add("active");
            else btn.classList.remove("active");
        });
        statusLine.innerHTML = gameMode === "challenge" ? `⚡ 挑战模式 · 剩余搜索: ${remainingSearches}` : "📖 叙事模式 · 无限探索";
        
        let totalCoreKeywords = Object.keys(keywordCardMap).length;
        let progressPercent = (searchedKeywords.size / totalCoreKeywords) * 100;
        let progressHtml = `<div class="chain-item">
                            <span class="chain-name">探索</span>
                            <div class="chain-bar-container"><div class="chain-bar-fill" style="width:${progressPercent}%"></div></div>
                            <span class="chain-value">${searchedKeywords.size}/${totalCoreKeywords}</span>
                           </div>`;
        chainProgressDiv.innerHTML = progressHtml;
        
        if(foundClues.length === 0) clueListDiv.innerHTML = "暂无";
        else {
            clueListDiv.innerHTML = foundClues.map((c,idx) => `<div class="clue-item" data-text="${escapeHtml(c)}">📌 ${escapeHtml(c).substring(0,55)}...</div>`).join('');
        }
    }

    // 显示划词搜索按钮
    function showFloatSearchButton(x, y, selectedText) {
        if(floatBtn) floatBtn.remove();
        floatBtn = document.createElement('div');
        floatBtn.className = 'float-search-btn';
        floatBtn.innerHTML = '🔍 检索 "' + selectedText.substring(0, 20) + '"';
        floatBtn.style.left = (x + 10) + 'px';
        floatBtn.style.top = (y - 30) + 'px';
        floatBtn.onclick = () => {
            searchInput.value = selectedText;
            performSearch();
            if(floatBtn) floatBtn.remove();
            floatBtn = null;
        };
        document.body.appendChild(floatBtn);
        
        // 点击其他地方时移除按钮
        setTimeout(() => {
            document.addEventListener('click', function removeBtn(e) {
                if(floatBtn && !floatBtn.contains(e.target)) {
                    floatBtn.remove();
                    floatBtn = null;
                    document.removeEventListener('click', removeBtn);
                }
            });
        }, 10);
    }

    // 划词搜索功能（带按钮，每次选中都能正常显示）
function enableTextSelectionSearch() {
    const resultBox = document.querySelector('.result-box');
    let floatBtn = null;
    
    // 移除已有按钮的函数
    function removeFloatBtn() {
        if(floatBtn && floatBtn.parentNode) {
            floatBtn.remove();
            floatBtn = null;
        }
    }
    
    resultBox.addEventListener('mouseup', (e) => {
        // 先移除之前的按钮
        removeFloatBtn();
        
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();
        
        if(selectedText && selectedText.length > 0 && selectedText.length < 40 && !gameEnded) {
            try {
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                const x = rect.right + window.scrollX;
                const y = rect.top + window.scrollY - 25;
                
                // 创建新按钮
                floatBtn = document.createElement('div');
                floatBtn.className = 'float-search-btn';
                floatBtn.innerHTML = '🔍 检索 "' + (selectedText.length > 15 ? selectedText.substring(0, 15) + '...' : selectedText) + '"';
                floatBtn.style.left = x + 'px';
                floatBtn.style.top = y + 'px';
                floatBtn.style.position = 'fixed';
                floatBtn.style.zIndex = '10000';
                
                floatBtn.onclick = (event) => {
                    event.stopPropagation();
                    searchInput.value = selectedText;
                    performSearch();
                    removeFloatBtn();
                    selection.removeAllRanges();
                };
                
                document.body.appendChild(floatBtn);
                
                // 延迟移除按钮（点击其他地方时）
                setTimeout(() => {
                    const clickHandler = (event) => {
                        if(floatBtn && !floatBtn.contains(event.target)) {
                            removeFloatBtn();
                            document.removeEventListener('click', clickHandler);
                        }
                    };
                    document.addEventListener('click', clickHandler);
                }, 10);
                
            } catch(e) {
                console.log('划词位置获取失败');
            }
        }
    });
}

    function escapeHtml(str) { return str.replace(/[&<>]/g, function(m){if(m==='&') return '&amp;'; if(m==='<') return '&lt;'; if(m==='>') return '&gt;'; return m;});}

    function addClue(content) {
        if(!foundClues.includes(content)) foundClues.push(content);
        updateUI();
    }

    function performSearch() {
        // 添加这行：搜索时移除浮动按钮
        const existingBtn = document.querySelector('.float-search-btn');
        if(existingBtn) existingBtn.remove();

        if(gameEnded) {
            resultArea.innerHTML = "游戏已结束，点击右上角可以重置游戏。";
            return;
        }
        let keyword = searchInput.value.trim().toLowerCase();
        if(keyword === "") {
            resultArea.innerHTML = "请输入搜索词。建议：检查错别字，每次仅搜索一个人物或事物。";
            return;
        }
        
        if(gameMode === "challenge") {
            if(remainingSearches <= 0) {
                resultArea.innerHTML = "【结局：搜索次数耗尽】老爷爷默默合上笔记本，社息社畜之间的关系仍然是一个谜。";
                gameEnded = true;
                updateUI();
                return;
            }
            remainingSearches--;
        }
        
        // 淫秽词惩罚
        if(dirtyKeywords.some(k => keyword.includes(k))) {
            dirtyCount++;
            resultArea.innerHTML = ` '这样的感情……吗？' (${dirtyCount}/10)`;
            if(dirtyCount >= 10) {
                resultArea.innerHTML += `<br><br>💛 黄色警告！页面闪了一下。`;
                document.querySelector('.result-box').classList.add('warning-flash');
                setTimeout(()=>document.querySelector('.result-box').classList.remove('warning-flash'),500);
            }
            updateUI();
            return;
        }
        
        // 负面词惩罚
        if(negativeKeywords.some(k => keyword.includes(k))) {
            negativeCount++;
            resultArea.innerHTML = ` 老爷爷发出了叹气：'唉……' (负面情绪 ${negativeCount}/40)`;
            if(negativeCount >= 40) {
                resultArea.innerHTML += `<br><br>📖 老爷爷合上了笔记本，离开了。他不想再写更多绯闻了。`;
                kikuFound = false;
            }
            updateUI();
            return;
        }
        
        // 罢工词计数
        if(strikeKeywords.some(k => keyword.includes(k))) {
            strikeCount++;
            resultArea.innerHTML = ` 来自弗朗西斯的罢工号召 +1 (${strikeCount}/8 可触发罢工结局)`;
            if(strikeCount >= 8) {
                resultArea.innerHTML += `<br><br>【罢工结局】弗朗西斯成功带动了所有人一起罢工，检索系统也罢工了！`;
                gameEnded = true;
            }
            updateUI();
            return;
        }
        
        // NPC发现
        if(keyword === "菊") {
            if(!kikuFound) {
                kikuFound = true;
                resultArea.innerHTML = keywordCardMap["菊"];
                addClue(keywordCardMap["菊"]);
                updateUI();
                return;
            }
        }
        if(keyword === "弗朗西斯") {
            if(!franFound) {
                franFound = true;
                resultArea.innerHTML = keywordCardMap["弗朗西斯"];
                addClue(keywordCardMap["弗朗西斯"]);
                updateUI();
                return;
            }
        }
        
        // 工位解锁后的书籍结局
        if(deskUnlocked && (keyword === "华兹华斯的诗集" || keyword === "诗集")) {
            resultArea.innerHTML = keywordCardMap["华兹华斯的诗集"];
            addClue(keywordCardMap["华兹华斯的诗集"]);
            resultArea.innerHTML += `<br><br>🎉 【结局A：特殊关系】愿我们永远是彼此的光。阿尔弗雷德和亚瑟今后也会继续保持他们的特殊关系。游戏结束。`;
            gameEnded = true;
            updateUI();
            return;
        }
        if(deskUnlocked && (keyword === "EROS" || keyword === "eros")) {
            resultArea.innerHTML = keywordCardMap["EROS"];
            addClue(keywordCardMap["EROS"]);
            resultArea.innerHTML += `<br><br>💕 【结局B：情侣】便签上的告白。阿尔弗雷德和亚瑟原来早就是情侣了。游戏结束。`;
            gameEnded = true;
            updateUI();
            return;
        }
        
        // 工位解锁条件：搜索过20个以上关键词后自动解锁
        if(!deskUnlocked && searchedKeywords.size >= 20) {
            deskUnlocked = true;
            resultArea.innerHTML += `<br><br>🔓 新关键词解锁：「工位上的书」！试着搜索它。`;
        }
        
        // 工位上的书搜索
        if(keyword === "工位上的书" || keyword === "工位") {
            if(deskUnlocked) {
                resultArea.innerHTML = keywordCardMap["工位上的书"];
                addClue(keywordCardMap["工位上的书"]);
                updateUI();
                return;
            } else {
                resultArea.innerHTML = "【亚瑟的工位】亚瑟的工位上有几本书，看起来经常翻阅。但你需要先了解更多关于他们的事情，才能看懂这些书。";
                updateUI();
                return;
            }
        }
        
        // 古文书和时尚杂志的提示
        if(keyword === "古文书") {
            if(kikuFound) {
                resultArea.innerHTML = keywordCardMap["古文书"] + "<br><br>菊告诉你：'那是《华兹华斯的诗集》。'";
                addClue(keywordCardMap["古文书"]);
            } else {
                resultArea.innerHTML = "【古文书】一本看起来很旧的古文书。也许有人知道它的来历……试试问问别人？";
            }
            updateUI();
            return;
        }
        if(keyword === "时尚杂志") {
            if(franFound) {
                resultArea.innerHTML = keywordCardMap["时尚杂志"] + "<br><br>弗朗西斯告诉你：'那是《EROS》杂志，限量版！'";
                addClue(keywordCardMap["时尚杂志"]);
            } else {
                resultArea.innerHTML = "【时尚杂志】一本封面鲜艳的时尚杂志。也许有人知道它的内容……试试搜索「弗朗西斯」？";
            }
            updateUI();
            return;
        }
        
        // 假线索
        if(fakeKeywords.some(k => keyword.includes(k))) {
            resultArea.innerHTML = "这似乎和两人的故事没什么关系。试试搜索其他关键词吧。";
            updateUI();
            return;
        }
        
        // 独立映射匹配
        if(keywordCardMap[keyword]) {
            resultArea.innerHTML = keywordCardMap[keyword];
            addClue(keywordCardMap[keyword]);
            if(!searchedKeywords.has(keyword)) {
                searchedKeywords.add(keyword);
            }
            updateUI();
            return;
        }
        
        // 模糊匹配
        let matched = false;
        for(let [key, content] of Object.entries(keywordCardMap)) {
            if(keyword.includes(key) || key.includes(keyword)) {
                resultArea.innerHTML = content;
                addClue(content);
                if(!searchedKeywords.has(key)) {
                    searchedKeywords.add(key);
                }
                matched = true;
                break;
            }
        }
        
        if(!matched) {
            resultArea.innerHTML = "没有搜索结果。\n\n建议：检查错别字，每次仅搜索一个人物或事物。";
        }
        
        updateUI();
        if(gameMode === "challenge" && remainingSearches === 0 && !gameEnded) {
            resultArea.innerHTML = "【结局：搜索次数耗尽】默默合上了笔记本。";
            gameEnded = true;
            updateUI();
        }
    }

    function resetGame() {
        gameEnded = false;
        deskUnlocked = false;
        kikuFound = false;
        franFound = false;
        dirtyCount = 0;
        negativeCount = 0;
        strikeCount = 0;
        foundClues = [];
        searchedKeywords.clear();
        if(gameMode === "challenge") remainingSearches = 100;
        else remainingSearches = 999;
        resultArea.innerHTML = "【匿名信】<br><br>如果你想了解那两位的故事，试着利用这个网站搜索……也许你会发现什么。<br><br>";
        updateUI();
    }

    function setMode(mode) {
        gameMode = mode;
        resetGame();
    }

    function initCollapsible() {
        const headers = document.querySelectorAll('.collapsible-header');
        headers.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const arrow = header.querySelector('.collapse-arrow');
                if(content.classList.contains('collapsed')) {
                    content.classList.remove('collapsed');
                    arrow.innerHTML = '▼';
                } else {
                    content.classList.add('collapsed');
                    arrow.innerHTML = '▶';
                }
            });
        });
    }

    searchBtn.addEventListener("click", performSearch);
    searchInput.addEventListener("keypress", (e) => { if(e.key === "Enter") performSearch(); });
    resetBtn.addEventListener("click", resetGame);
    modeBtns.forEach(btn => {
        btn.addEventListener("click", () => setMode(btn.dataset.mode));
    });
    userNotes.addEventListener("input", saveToLocal);
    
    let savedNotes = localStorage.getItem("jones_notes");
    if(savedNotes) userNotes.value = savedNotes;
    
    initCollapsible();
    enableTextSelectionSearch();
    setMode("story");