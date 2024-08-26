package com.su.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.su.common.Response;
import com.su.model.domain.Test;

/**
 * @author su
 * @date 2024/6/26
 */
public interface TestService extends IService<Test> {
Response getName(Integer id);
}
