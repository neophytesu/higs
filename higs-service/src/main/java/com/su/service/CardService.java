package com.su.service;

import com.su.common.Response;
import com.su.model.domain.Card;
import com.baomidou.mybatisplus.extension.service.IService;
import com.su.model.request.RegistRequest;

/**
* @author 86158
* @description 针对表【card】的数据库操作Service
* @createDate 2024-08-29 10:23:07
*/
public interface CardService extends IService<Card> {

    Response getCardStatus(int cardId);

    void addCard(int cardId);
}
