package com.su.model.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import org.apache.commons.lang3.builder.ToStringBuilder;

/**
 * @author su
 * @date 2024/6/26
 */
@TableName(value = "Test")
@Data
public class Test {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String name;
    @Override
    public String toString(){
        return ToStringBuilder.reflectionToString(this);
    }
}
