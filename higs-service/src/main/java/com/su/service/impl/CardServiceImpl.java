package com.su.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.su.model.domain.Card;
import com.su.service.CardService;
import com.su.mapper.CardMapper;
import org.springframework.stereotype.Service;

/**
* @author 86158
* @description 针对表【card】的数据库操作Service实现
* @createDate 2024-08-29 10:23:07
*/
@Service
public class CardServiceImpl extends ServiceImpl<CardMapper, Card>
    implements CardService{

}




