package com.su.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.su.model.domain.User;
import org.springframework.stereotype.Repository;

/**
* @author 86158
* @description 针对表【user】的数据库操作Mapper
* @createDate 2024-08-29 10:25:05
* @Entity com.su.domain.User
*/
@Repository
public interface UserMapper extends BaseMapper<User> {

}




