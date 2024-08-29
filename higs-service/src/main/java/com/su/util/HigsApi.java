package com.su.util;

import com.su.constant.Constant;

public class HigsApi {
    /*卡号生成*/
    public static int cardGenerate(int userid){
        return Constant.CARD_FIRST_NUM+userid;
    }
}
