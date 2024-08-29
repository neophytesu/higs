package com.su.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.su.model.domain.User;
import com.su.service.UserService;
import com.su.mapper.UserMapper;
import org.springframework.stereotype.Service;

/**
* @author 86158
* @description 针对表【user】的数据库操作Service实现
* @createDate 2024-08-29 10:25:05
*/
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User>
    implements UserService{

}




