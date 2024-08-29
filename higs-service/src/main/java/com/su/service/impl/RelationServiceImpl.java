package com.su.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.su.model.domain.Relation;
import com.su.service.RelationService;
import com.su.mapper.RelationMapper;
import com.su.util.HigsApi;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @author 86158
* @description 针对表【relation】的数据库操作Service实现
* @createDate 2024-08-29 10:25:02
*/
@Service
public class RelationServiceImpl extends ServiceImpl<RelationMapper, Relation>
    implements RelationService{
@Autowired
private RelationMapper relationMapper;
    @Override
    public void addRelation(int userId, int phone,int cardId) {
        Relation relation = new Relation();
        relation.setUserId(userId);
        relation.setPhone(phone);
        relation.setCardId(cardId);
        relationMapper.insert(relation);
    }
}




