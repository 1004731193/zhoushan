<template>
    <div class="pic">
      <img src="../../assets/lwd/5.jpg" alt="">
     <div class="conts">
            <p>1.行程透明保障</p>
            为保证客人明明白白出游，携程针对玩乐产品涉及的行、游、娱、食、购等细节，率先要求并做到“透明”披露，明确规定所有玩乐产品均需做到:
            <br>
            1）大小景点介绍全，游览时长更清晰；
            <br>
            2）费用包含全记录，明白预订有保障；
            <br>
            3）购物信息早披露，放心消费无强迫；
            <br>
            4）提前退改有保障，行程安排更灵活。
            <br>
            <div @click="letgo" class="btn">
                点击详情
            </div>
            <div class="cline"></div>
            <p>2.特殊退订和更改保障</p>
            1) 出游保障：订单确认后，因携程/商家原因取消或造成您无法出行，由携程/商家进行退款及赔付
            <br>
            2) 更改则赔付：订单确认后，未经客人书面同意，因携程/产品提供方原因更改订单（不可抗力因素除外），需要向客人进行赔付。会按照，客人接受降价更改，差价退一赔一；客人不接受更改取消，最高按订单价格退一赔一。
            <br>
            3) 因特殊原因造成：为了分担携程客户因为自身不能预期和控制的特殊原因退订产生的损失，携程率先在业内设立“特殊原因退订保障”。如果您满足下述公示条件，请最晚于出行日前联系我司申请，并在提出申请后一周内交齐材料。携程将补偿预订人与实际损失等额的携程“任我游”礼品卡（有效期：详见礼品卡有效期提示信息）。如有突发情况，敬请您尽快联系携程处理。
             <div class="cline"></div>
             <p>3.承诺不加价</p>
             订单付款后，携程/商家不得因自身或者第三方原因要求加价。
            <div class="cline"></div>
            <p>4.重大灾害旅游体验保险金</p>
            携程旅游客人如果遇到不可预测的自然灾害（政府官方机构发布橙色或红色预警级别）、政治或社会卫生事件（政府官方机构发布暂勿或禁止前往预警）造成旅游体验受实质损害的，携程将视具体情况启动重大灾害旅游体验保障金，对行程受直接影响而取消所产生的订单最终损失予以承担：
            <br>
            1） 若全部或部分行程取消，我们将退还未实际发生费用；
            <br>
            2） 若行程更改，费用降低，我们将退还差价部分；
            <br>
            注：不可抗力是指不能预见、不能避免并不能克服的客观情况。包括但不限于：恶劣天气、自然灾害、战争、罢工、骚乱、恐怖事件、政府行为、公共卫生事件等客观原因，造成旅游行程安排的交通服务延误、景区临时关闭、宾馆饭店临时被征用、出境管制、边境关闭、目的地入境政策临时变更、我国政府机构发布橙色及以上旅游预警信息等，导致旅游目的无法实现。
            <div class="cline"></div>
            <p>5.旅游预警机制</p>
            携程在业内率先建立旅游预警机制，在自然灾害、病疫灾害、政治变动、突发事件等情况下，及时联系即将出行及处于行程中的客人，提醒其注意风险，从而保障客人安全和权益。
            <div class="cline"></div>
            <p>6.应急救助体系</p>
            在产品使用过程中，如遇突发严重疾病，客人将得到我们及时送医就诊的帮助；如遇到意外事故导致出行或产品使用难以为继，客人也将得到我们力所能及的必要援助。

        </div>
    </div>
</template>
<script>
export default {
    methods:{
        letgo(){
            this.$router.push("/lwdDetails")
        }
    }
}
</script>
<style scope>
    .pic>img{
        width: 23.4375rem;
        height: 8.625rem;
        /* border: .0625rem solid #000; */
    }
    .conts{
        /* width: 23.4375rem;
        height: 77.6875rem; */
        /* border: .0625rem solid #000; */
        font-size: .875rem;
        line-height: 1.6;
        margin: 0rem 0rem 4.6875rem;
        padding: 3.75px 36.75px;
        text-align: left;
    }
    .conts p {
        display: block;
        width: 21.0625rem;
        height: 1.875rem;
        font-weight: bold;
        font-size: 1rem;
        font-size: 1.125rem;
        color: #275da5;
        margin: .84375rem 0rem 0rem;
        text-align: left;
        font-family: "微软雅黑";
   }
   div.btn{
        width: 4.75rem;
        height: 1.75rem;
        border: .0625rem solid #333;
        text-align: center;
        border-radius: .25rem;
        white-space: nowrap;
        margin: .421875rem 0rem;
        padding: .20625rem;
   }
   .cline{
        margin-bottom: 4%;
        padding-top: 4%;
        border-bottom: .0625rem solid #ddd;
   }
</style>