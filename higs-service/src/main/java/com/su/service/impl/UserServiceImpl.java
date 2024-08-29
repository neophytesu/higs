package com.su.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.su.model.request.RegistRequest;
import com.su.service.UserService;
import com.su.mapper.UserMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.su.model.domain.User;
/**
* @author 86158
* @description 针对表【user】的数据库操作Service实现
* @createDate 2024-08-29 10:25:05
*/
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User>
    implements UserService{
@Autowired
private UserMapper userMapper;
    @Override
    public void addUser(RegistRequest registRequest) {
        User user = new User();
        BeanUtils.copyProperties(registRequest, user);
        userMapper.insertOrUpdate(user);
    }

    @Override
    public int getUserIdByMobile(String mobile) {
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getMobile, mobile);
        User user = userMapper.selectOne(queryWrapper);
        return user.getId();
    }
}




