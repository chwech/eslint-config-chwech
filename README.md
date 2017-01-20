[![Build Status](https://travis-ci.org/chwech/eslint-config-chwech.svg?branch=master)](https://travis-ci.org/chwech/eslint-config-chwech)
[![codecov](https://codecov.io/gh/chwech/eslint-config-chwech/branch/master/graph/badge.svg)](https://codecov.io/gh/chwech/eslint-config-chwech)
[![npm](https://img.shields.io/npm/l/express.svg)](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)
# Javascript编程风格eslint配置
## 环境
node.js、es6
## 基本格式化
1. 缩进层级

    使用一个制表符（tab）进行缩进
2. 分号

    使用分号
3. 行最大长度

    一行最大长度为80个字符
4. 空行
    * 多行或单行注释之前有空行
    * 变量声明后有一行空行
5. 命名
    * 变量函数命名使用小骆峰式
    * 构造函数使用大骆峰式命名
    * 常量使用大写字母和下划线命名
6. 字面量
    1. 字符串字面量
    * 禁止多行字符串
    * 使用模板字符串而非字符串连接
    
    2. 数字字面量
    * 浮点数小数点前后必须有数字
    * 禁止使用八进制数字字面量  
     
## 注释
* 多行或单行注释之前有空行
* 强制使用有效的 JSDoc 注释
* 注释//和/*后有一个空格  

## 语句和表达式
* 块语句使用花括号
* 花括号对齐方式  

    > 11tbs风格
* 禁用with语句
* for-in循环要使用hasOwnProperty()过滤实例属性  

## 变量、函数和运算符
1. 变量声明
    * var声明在作用域顶部
    * 单一变量声明
2. 函数声明
    * 函数声明不应该在语句块之内
3. IIFE
    * 立即执行函数表达式用圆括号括起来
4. 严格模式
    * 使用局部严格模式
5. 相等
    * 总是使用===和!==做比较
6. eval()
    * 禁用eval
7. 包装类型
    * 禁止使用原始包装类型