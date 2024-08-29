package com.su.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.su.common.Response;
import com.su.dao.TestMapper;
import com.su.model.domain.Test;
import com.su.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author su
 * @date 2026/6/26
 */
@Service
public class TestServiceImpl extends ServiceImpl<TestMapper, Test> implements TestService {
    @Autowired
    private TestMapper testMapper;

    @Override
    public Response getName(Integer id) {
        String name = testMapper.selectById(id).getName();
        return Response.success("查询成功", name);
    }
}
