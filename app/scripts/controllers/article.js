'use strict';

/**
 * @ngdoc function
 * @name kanshuWebApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the kanshuWebApp
 */
angular.module('kanshuWebApp')
  .controller('ArticleCtrl', ['$scope', function ($scope) {
    $scope.showingInlineDefinitions = true;

    $scope.dictionaryPopover = {entry: 'Hi', position: {"top": 0, "left": 0}, visible: false};

    $scope.articleLevel = {hsk: 0};

    $scope.toggle = function() {
    	$scope.showingInlineDefinitions = !$scope.showingInlineDefinitions;
    	if($scope.showingInlineDefinitions){
    		angular.element(".inlineDef").css("display: inline-block");
    	}else{
       		angular.element(".inlineDef").css("display: none");
    	}
    };

    $scope.change = function() {
    	$scope.dictionaryPopover.entry = "Changed";
    };

    $scope.sample = {
    "article": [
        {
            "index": 0,
            "content": "白族",
            "type": "word",
            "displayText": "白族",
            "definitions": [
                "Bai (ethnic group)"
            ],
            "hskLevel": -1,
            "pronunciation": "Bái zú"
        },
        {
            "index": 0,
            "content": "性格",
            "type": "word",
            "displayText": "性格",
            "definitions": [
                "nature; disposition; temperament; character; CL:個|个[ge4]"
            ],
            "hskLevel": 4,
            "pronunciation": "xìng gé"
        },
        {
            "index": 0,
            "content": "外向",
            "type": "word",
            "displayText": "外向、",
            "definitions": [
                "outward-looking; extrovert; extroverted (personality); export-oriented (economy)"
            ],
            "hskLevel": 6,
            "pronunciation": "wài xiàng"
        },
        {
            "index": 2,
            "content": "好客",
            "type": "word",
            "displayText": "好客、",
            "definitions": [
                "hospitality; to treat guests well; to enjoy having guests; hospitable; friendly"
            ],
            "pronunciation": "hào kè",
            "hskLevel": 6
        },
        {
            "index": 4,
            "content": "尊老爱幼",
            "type": "word",
            "displayText": "尊老爱幼",
            "definitions": [
                "respect the old and cherish the young"
            ],
            "pronunciation": "zūn lǎo ài yòu",
            "hskLevel": -1
        },
        {
            "index": 5,
            "content": "，",
            "type": "punctuation"
        },
        {
            "index": 6,
            "content": "在",
            "type": "word",
            "displayText": "在",
            "definitions": [
                "(located) at; (to be) in; to exist; in the middle of doing sth; (indicating an action in progress)"
            ],
            "hskLevel": 1,
            "pronunciation": "zài"
        },
        {
            "index": 6,
            "content": "对",
            "type": "word",
            "displayText": "对",
            "definitions": [
                "right; correct; couple; pair; towards; at; for; to face; opposite; to treat (sb a certain way); to match together; to adjust; to fit; to suit; to answer; to reply; classifier: couple"
            ],
            "hskLevel": 2,
            "pronunciation": "duì"
        },
        {
            "index": 6,
            "content": "人",
            "type": "word",
            "displayText": "人",
            "definitions": [
                "man; person; people; CL:個|个[ge4],位[wei4]"
            ],
            "hskLevel": 1,
            "pronunciation": "rén"
        },
        {
            "index": 6,
            "content": "的",
            "type": "word",
            "displayText": "的",
            "definitions": [
                "aim; clear",
                "of; ~'s (possessive particle); (used after an attribute); (used to form a nominal expression); (used at the end of a declarative sentence for emphasis)",
                "see 的士[di1 shi4]",
                "really and truly"
            ],
            "hskLevel": 1,
            "pronunciation": "dì"
        },
        {
            "index": 6,
            "content": "称谓",
            "type": "word",
            "displayText": "称谓",
            "definitions": [
                "title; appellation; form of address"
            ],
            "hskLevel": -1,
            "pronunciation": "chēng wèi"
        },
        {
            "index": 6,
            "content": "前",
            "type": "word",
            "displayText": "前",
            "definitions": [
                "front; forward; ahead; first; top (followed by a number); future; ago; before; BC (e.g. 前293年); former; formerly"
            ],
            "hskLevel": -1,
            "pronunciation": "qián"
        },
        {
            "index": 6,
            "content": "喜欢",
            "type": "word",
            "displayText": "喜欢",
            "definitions": [
                "to like; to be fond of"
            ],
            "hskLevel": 1,
            "pronunciation": "xǐ huan"
        },
        {
            "index": 6,
            "content": "加",
            "type": "word",
            "displayText": "加",
            "definitions": [
                "abbr. for Canada 加拿大[Jia1 na2 da4]",
                "to add; plus; (used after an adverb such as 不, 大, 稍 etc, and before a disyllabic verb, to indicate that the action of the verb is applied to sth or sb previously mentioned); to apply (restrictions etc) to (sb); to give (support, consideration etc) to (sth)"
            ],
            "hskLevel": -1,
            "pronunciation": "Jiā"
        },
        {
            "index": 6,
            "content": "个",
            "type": "word",
            "displayText": "个",
            "definitions": [
                "variant of 個|个[ge4]"
            ],
            "hskLevel": 1,
            "pronunciation": "gè"
        },
        {
            "index": 7,
            "content": "“",
            "type": "punctuation"
        },
        {
            "index": 8,
            "content": "阿",
            "type": "word",
            "displayText": "阿”",
            "definitions": [
                "prefix used before monosyllabic names, kinship terms etc to indicate familiarity; used in transliteration; also pr. [a4]",
                "abbr. for Afghanistan 阿富汗[A1 fu4 han4]",
                "flatter"
            ],
            "pronunciation": "ā",
            "hskLevel": -1
        },
        {
            "index": 10,
            "content": "字",
            "type": "word",
            "displayText": "字",
            "definitions": [
                "letter; symbol; character; word; CL:個|个[ge4]; courtesy or style name traditionally given to males aged 20 in dynastic China"
            ],
            "hskLevel": 1,
            "pronunciation": "zì"
        },
        {
            "index": 10,
            "content": "表示",
            "type": "word",
            "displayText": "表示",
            "definitions": [
                "to express; to show; to say; to state; to indicate; to mean"
            ],
            "hskLevel": 3,
            "pronunciation": "biǎo shì"
        },
        {
            "index": 10,
            "content": "亲切",
            "type": "word",
            "displayText": "亲切",
            "definitions": [
                "amiable; cordial; close and dear; familiar"
            ],
            "hskLevel": 5,
            "pronunciation": "qīn qiè"
        },
        {
            "index": 10,
            "content": "和",
            "type": "word",
            "displayText": "和",
            "definitions": [
                "old variant of 和[he2]; harmonious"
            ],
            "hskLevel": 1,
            "pronunciation": "hé"
        },
        {
            "index": 10,
            "content": "尊敬",
            "type": "word",
            "displayText": "尊敬。",
            "definitions": [
                "to respect; to revere"
            ],
            "hskLevel": 5,
            "pronunciation": "zūn jìng"
        },
        {
            "index": 12,
            "content": "白族",
            "type": "word",
            "displayText": "白族",
            "definitions": [
                "Bai (ethnic group)"
            ],
            "hskLevel": -1,
            "pronunciation": "Bái zú"
        },
        {
            "index": 12,
            "content": "访",
            "type": "word",
            "displayText": "访",
            "definitions": [
                "to visit; to call on; to seek; to inquire; to investigate"
            ],
            "hskLevel": -1,
            "pronunciation": "fǎng"
        },
        {
            "index": 12,
            "content": "友",
            "type": "word",
            "displayText": "友",
            "definitions": [
                "friend"
            ],
            "hskLevel": -1,
            "pronunciation": "yǒu"
        },
        {
            "index": 12,
            "content": "或",
            "type": "word",
            "displayText": "或",
            "definitions": [
                "maybe; perhaps; might; possibly; or"
            ],
            "hskLevel": -1,
            "pronunciation": "huò"
        },
        {
            "index": 12,
            "content": "探病",
            "type": "word",
            "displayText": "探病",
            "definitions": [
                "to visit a sick person or patient"
            ],
            "hskLevel": -1,
            "pronunciation": "tàn bìng"
        },
        {
            "index": 12,
            "content": "时",
            "type": "word",
            "displayText": "时",
            "definitions": [
                "surname Shi",
                "o'clock; time; when; hour; season; period"
            ],
            "hskLevel": -1,
            "pronunciation": "Shí"
        },
        {
            "index": 12,
            "content": "一般",
            "type": "word",
            "displayText": "一般",
            "definitions": [
                "same; ordinary; so-so; common; general; generally; in general"
            ],
            "hskLevel": 3,
            "pronunciation": "yī bān"
        },
        {
            "index": 12,
            "content": "不",
            "type": "word",
            "displayText": "不",
            "definitions": [
                "(negative prefix); not; no"
            ],
            "hskLevel": 1,
            "pronunciation": "bù"
        },
        {
            "index": 12,
            "content": "选择",
            "type": "word",
            "displayText": "选择",
            "definitions": [
                "to select; to pick; choice; option; alternative"
            ],
            "hskLevel": 3,
            "pronunciation": "xuǎn zé"
        },
        {
            "index": 12,
            "content": "在",
            "type": "word",
            "displayText": "在",
            "definitions": [
                "(located) at; (to be) in; to exist; in the middle of doing sth; (indicating an action in progress)"
            ],
            "hskLevel": 1,
            "pronunciation": "zài"
        },
        {
            "index": 12,
            "content": "上午",
            "type": "word",
            "displayText": "上午",
            "definitions": [
                "morning; CL:個|个[ge4]"
            ],
            "hskLevel": 1,
            "pronunciation": "shàng wǔ"
        },
        {
            "index": 13,
            "content": "，",
            "type": "punctuation"
        },
        {
            "index": 14,
            "content": "到",
            "type": "word",
            "displayText": "到",
            "definitions": [
                "to (a place); until (a time); up to; to go; to arrive; (verb complement denoting completion or result of an action)"
            ],
            "hskLevel": 2,
            "pronunciation": "dào"
        },
        {
            "index": 14,
            "content": "农村",
            "type": "word",
            "displayText": "农村",
            "definitions": [
                "rural area; village; CL:個|个[ge4]"
            ],
            "hskLevel": 4,
            "pronunciation": "nóng cūn"
        },
        {
            "index": 14,
            "content": "遇到",
            "type": "word",
            "displayText": "遇到",
            "definitions": [
                "to meet; to run into; to come across"
            ],
            "hskLevel": 3,
            "pronunciation": "yù dào"
        },
        {
            "index": 14,
            "content": "主人",
            "type": "word",
            "displayText": "主人",
            "definitions": [
                "master; host; owner; CL:個|个[ge4]"
            ],
            "hskLevel": 5,
            "pronunciation": "zhǔ rén"
        },
        {
            "index": 14,
            "content": "家",
            "type": "word",
            "displayText": "家",
            "definitions": [
                "home; family; (polite) my (sister, uncle etc); classifier for families or businesses; refers to the philosophical schools of pre-Han China; noun suffix for a specialist in some activity, such as a musician or revolutionary, corresponding to English -ist, -er, -ary or -ian; CL:個|个[ge4]",
                "surname Jia"
            ],
            "hskLevel": 1,
            "pronunciation": "jiā"
        },
        {
            "index": 14,
            "content": "有人",
            "type": "word",
            "displayText": "有人",
            "definitions": [
                "someone; people; anyone; there is someone there; occupied (as in restroom)"
            ],
            "hskLevel": -1,
            "pronunciation": "yǒu rén"
        },
        {
            "index": 14,
            "content": "分娩",
            "type": "word",
            "displayText": "分娩",
            "definitions": [
                "labor; parturition; delivery"
            ],
            "hskLevel": -1,
            "pronunciation": "fēn miǎn"
        },
        {
            "index": 14,
            "content": "或",
            "type": "word",
            "displayText": "或",
            "definitions": [
                "maybe; perhaps; might; possibly; or"
            ],
            "hskLevel": -1,
            "pronunciation": "huò"
        },
        {
            "index": 14,
            "content": "有",
            "type": "word",
            "displayText": "有",
            "definitions": [
                "to have; there is; there are; to exist; to be"
            ],
            "hskLevel": 1,
            "pronunciation": "yǒu"
        },
        {
            "index": 14,
            "content": "重病",
            "type": "word",
            "displayText": "重病",
            "definitions": [
                "serious illness"
            ],
            "hskLevel": -1,
            "pronunciation": "zhòng bìng"
        },
        {
            "index": 14,
            "content": "人",
            "type": "word",
            "displayText": "人",
            "definitions": [
                "man; person; people; CL:個|个[ge4],位[wei4]"
            ],
            "hskLevel": 1,
            "pronunciation": "rén"
        },
        {
            "index": 14,
            "content": "时",
            "type": "word",
            "displayText": "时",
            "definitions": [
                "surname Shi",
                "o'clock; time; when; hour; season; period"
            ],
            "hskLevel": -1,
            "pronunciation": "Shí"
        },
        {
            "index": 15,
            "content": "，",
            "type": "punctuation"
        },
        {
            "index": 16,
            "content": "进",
            "type": "word",
            "displayText": "进",
            "definitions": [
                "to advance; to enter; to come (or go) into; to receive or admit; to eat or drink; to submit or present; (used after a verb) into, in; to score a goal"
            ],
            "hskLevel": 2,
            "pronunciation": "jìn"
        },
        {
            "index": 16,
            "content": "屋",
            "type": "word",
            "displayText": "屋",
            "definitions": [
                "house; room; CL:間|间[jian1],個|个[ge4]"
            ],
            "hskLevel": -1,
            "pronunciation": "wū"
        },
        {
            "index": 16,
            "content": "时",
            "type": "word",
            "displayText": "时",
            "definitions": [
                "surname Shi",
                "o'clock; time; when; hour; season; period"
            ],
            "hskLevel": -1,
            "pronunciation": "Shí"
        },
        {
            "index": 16,
            "content": "应",
            "type": "word",
            "displayText": "应",
            "definitions": [
                "to agree (to do sth); should; ought to; must; (legal) shall",
                "to answer; to respond; to comply with; to deal or cope with",
                "surname Ying"
            ],
            "hskLevel": -1,
            "pronunciation": "yīng"
        },
        {
            "index": 16,
            "content": "谨慎",
            "type": "word",
            "displayText": "谨慎。",
            "definitions": [
                "cautious; prudent"
            ],
            "hskLevel": 5,
            "pronunciation": "jǐn shèn"
        },
        {
            "index": 18,
            "content": "白族",
            "type": "word",
            "displayText": "白族",
            "definitions": [
                "Bai (ethnic group)"
            ],
            "hskLevel": -1,
            "pronunciation": "Bái zú"
        },
        {
            "index": 18,
            "content": "喜欢",
            "type": "word",
            "displayText": "喜欢",
            "definitions": [
                "to like; to be fond of"
            ],
            "hskLevel": 1,
            "pronunciation": "xǐ huan"
        },
        {
            "index": 18,
            "content": "敬茶",
            "type": "word",
            "displayText": "敬茶",
            "definitions": [
                "to serve tea (to guests)"
            ],
            "hskLevel": -1,
            "pronunciation": "jìng chá"
        },
        {
            "index": 18,
            "content": "待",
            "type": "word",
            "displayText": "待",
            "definitions": [
                "to stay",
                "to wait; to treat; to deal with; to need; going to (do sth); about to; intending to"
            ],
            "hskLevel": -1,
            "pronunciation": "dāi"
        },
        {
            "index": 18,
            "content": "客",
            "type": "word",
            "displayText": "客",
            "definitions": [
                "customer; visitor; guest"
            ],
            "hskLevel": -1,
            "pronunciation": "kè"
        },
        {
            "index": 19,
            "content": "，",
            "type": "punctuation"
        },
        {
            "index": 20,
            "content": "同样",
            "type": "word",
            "displayText": "同样",
            "definitions": [
                "same; equal; equivalent"
            ],
            "hskLevel": -1,
            "pronunciation": "tóng yàng"
        },
        {
            "index": 20,
            "content": "有",
            "type": "word",
            "displayText": "有",
            "definitions": [
                "to have; there is; there are; to exist; to be"
            ],
            "hskLevel": 1,
            "pronunciation": "yǒu"
        },
        {
            "index": 21,
            "content": "“",
            "type": "punctuation"
        },
        {
            "index": 22,
            "content": "酒",
            "type": "word",
            "displayText": "酒",
            "definitions": [
                "wine (esp. rice wine); liquor; spirits; alcoholic beverage; CL:杯[bei1],瓶[ping2],罐[guan4],桶[tong3],缸[gang1]"
            ],
            "hskLevel": -1,
            "pronunciation": "jiǔ"
        },
        {
            "index": 22,
            "content": "满",
            "type": "word",
            "displayText": "满",
            "definitions": [
                "Manchu ethnic group",
                "to fill; full; filled; packed; fully; completely; quite; to reach the limit; to satisfy; satisfied; contented"
            ],
            "hskLevel": 4,
            "pronunciation": "Mǎn"
        },
        {
            "index": 22,
            "content": "敬",
            "type": "word",
            "displayText": "敬",
            "definitions": [
                "to respect; to venerate; to salute; to offer"
            ],
            "hskLevel": -1,
            "pronunciation": "jìng"
        },
        {
            "index": 22,
            "content": "人",
            "type": "word",
            "displayText": "人",
            "definitions": [
                "man; person; people; CL:個|个[ge4],位[wei4]"
            ],
            "hskLevel": 1,
            "pronunciation": "rén"
        },
        {
            "index": 23,
            "content": "，",
            "type": "punctuation"
        },
        {
            "index": 24,
            "content": "茶",
            "type": "word",
            "displayText": "茶",
            "definitions": [
                "tea; tea plant; CL:杯[bei1],壺|壶[hu2]"
            ],
            "hskLevel": 1,
            "pronunciation": "chá"
        },
        {
            "index": 24,
            "content": "满",
            "type": "word",
            "displayText": "满",
            "definitions": [
                "Manchu ethnic group",
                "to fill; full; filled; packed; fully; completely; quite; to reach the limit; to satisfy; satisfied; contented"
            ],
            "hskLevel": 4,
            "pronunciation": "Mǎn"
        },
        {
            "index": 24,
            "content": "欺",
            "type": "word",
            "displayText": "欺",
            "definitions": [
                "to take unfair advantage of; to deceive; to cheat"
            ],
            "hskLevel": -1,
            "pronunciation": "qī"
        },
        {
            "index": 24,
            "content": "人",
            "type": "word",
            "displayText": "人”",
            "definitions": [
                "man; person; people; CL:個|个[ge4],位[wei4]"
            ],
            "hskLevel": 1,
            "pronunciation": "rén"
        },
        {
            "index": 26,
            "content": "之",
            "type": "word",
            "displayText": "之",
            "definitions": [
                "(possessive particle, literary equivalent of 的[de5]); him; her; it"
            ],
            "hskLevel": 4,
            "pronunciation": "zhī"
        },
        {
            "index": 26,
            "content": "说",
            "type": "word",
            "displayText": "说",
            "definitions": [
                "to speak; to say; to explain; to scold; to tell off; a theory (usually in compounds such as 日心说 heliocentric theory)",
                "to persuade"
            ],
            "hskLevel": -1,
            "pronunciation": "shuō"
        },
        {
            "index": 27,
            "content": "；",
            "type": "punctuation"
        },
        {
            "index": 28,
            "content": "在",
            "type": "word",
            "displayText": "在",
            "definitions": [
                "(located) at; (to be) in; to exist; in the middle of doing sth; (indicating an action in progress)"
            ],
            "hskLevel": 1,
            "pronunciation": "zài"
        },
        {
            "index": 28,
            "content": "喝酒",
            "type": "word",
            "displayText": "喝酒",
            "definitions": [
                "to drink (alcohol)"
            ],
            "hskLevel": -1,
            "pronunciation": "hē jiǔ"
        },
        {
            "index": 28,
            "content": "方面",
            "type": "word",
            "displayText": "方面",
            "definitions": [
                "respect; aspect; field; side; CL:個|个[ge4]"
            ],
            "hskLevel": 4,
            "pronunciation": "fāng miàn"
        },
        {
            "index": 29,
            "content": "，",
            "type": "punctuation"
        },
        {
            "index": 30,
            "content": "白族",
            "type": "word",
            "displayText": "白族",
            "definitions": [
                "Bai (ethnic group)"
            ],
            "hskLevel": -1,
            "pronunciation": "Bái zú"
        },
        {
            "index": 30,
            "content": "很",
            "type": "word",
            "displayText": "很",
            "definitions": [
                "(adverb of degree); quite; very; awfully"
            ],
            "hskLevel": 1,
            "pronunciation": "hěn"
        },
        {
            "index": 30,
            "content": "文雅",
            "type": "word",
            "displayText": "文雅",
            "definitions": [
                "elegant; refined"
            ],
            "hskLevel": 6,
            "pronunciation": "wén yǎ"
        },
        {
            "index": 31,
            "content": "，",
            "type": "punctuation"
        },
        {
            "index": 32,
            "content": "通常",
            "type": "word",
            "displayText": "通常",
            "definitions": [
                "regular; usual; normal; usually; normally"
            ],
            "hskLevel": 5,
            "pronunciation": "tōng cháng"
        },
        {
            "index": 32,
            "content": "是",
            "type": "word",
            "displayText": "是",
            "definitions": [
                "variant of 是[shi4]; (used in given names)"
            ],
            "hskLevel": 1,
            "pronunciation": "shì"
        },
        {
            "index": 32,
            "content": "各自",
            "type": "word",
            "displayText": "各自",
            "definitions": [
                "each; respective; apiece"
            ],
            "hskLevel": 6,
            "pronunciation": "gè zì"
        },
        {
            "index": 32,
            "content": "随意",
            "type": "word",
            "displayText": "随意。",
            "definitions": [
                "as one wishes; according to one's wishes; at will; voluntary; conscious"
            ],
            "hskLevel": 6,
            "pronunciation": "suí yì"
        }
    ]
};
  }]);
