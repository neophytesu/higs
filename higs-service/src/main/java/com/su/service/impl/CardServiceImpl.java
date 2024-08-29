package com.su.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.su.common.Response;
import com.su.model.domain.Card;
import com.su.model.request.RegistRequest;
import com.su.service.CardService;
import com.su.mapper.CardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @author 86158
* @description 针对表【card】的数据库操作Service实现
* @createDate 2024-08-29 10:23:07
*/
@Service
public class CardServiceImpl extends ServiceImpl<CardMapper, Card>
    implements CardService{
    @Autowired
    private CardMapper cardMapper;
    @Override
    public Response getCardStatus(int cardId) {
        LambdaQueryWrapper<Card> queryWrapper=new LambdaQueryWrapper<>();
        queryWrapper.eq(Card::getId,cardId);
        int state= cardMapper.exists(queryWrapper)?1:0;
        return Response.success("success",state);
    }

    @Override
    public void addCard(int cardId) {
        Card card=new Card();
        card.setId(cardId);
        cardMapper.insert(card);
    }
}




