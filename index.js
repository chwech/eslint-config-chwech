module.exports = {

	extends: 'eslint:recommended',

	env: {
		'node': true,
		'es6': true,
		'browser': true
	},

	rules: {
		'no-console': 'off',

		// 缩进为2个空格
		'indent': ['error', 2],

		// 不需要分号结尾
		'semi': ['error','never'],

		// 单行最大长度为80个字符
		'max-len': ['error', 80, 4],

		// 统一使用简单换行分隔符\n换行
		'linebreak-style': ['error', 'unix'],

		// 多行或单行注释之前有空行
		'lines-around-comment': ['error', {
			beforeBlockComment: true,
			beforeLineComment: true
		}],

		// 强制使用有效的 JSDoc 注释
		'valid-jsdoc': ['error'],

		// 注释//和/*后有一个空格
		'spaced-comment': ['error', 'always'],

		// 变量声明后有一行空行
		'newline-after-var': ['error', 'always'],

		// 变量函数命名使用小骆峰式。此规则仅仅标记定义和赋值，不适用于方法调用。
		'camelcase': ['error',{"properties": "always"}],

		// 统一this的别名为that
		'consistent-this': ['error', 'that'],

		// 构造函数使用大骆峰式命名
		'new-cap': ['error'],

		// 禁止多行字符串
		'no-multi-str': ['error'],

		// 使用模板字符串而非字符串连接
		'prefer-template': ['error'],

		// 浮点数小数点前后必须有数字
		'no-floating-decimal': ['error'],

		// 禁止使用八进制数字字面量
		'no-octal': ['error'],

		// 确保与null比较时只等于null, 要使用===或!==比较
		'no-eq-null': ['error'],

		// 要求块语句使用花括号
		'curly': ['error'],

		// 花括号对齐方式
		'brace-style': ['error', '1tbs'],

		// 左圆括号后和右圆括号前没有空格
		'space-in-parens': ['error', 'never'],

		// 禁用with语句
		'no-with': ['error'],

		// for-in循环要使用hasOwnProperty()过滤实例属性
		'guard-for-in': ['error'],

		// var声明在作用域顶部
		'vars-on-top': ['error'],

		// var单一变量声明, const,let可以多个变量声明
		'one-var': ['error', { var: 'always', let: 'never', const: 'never' }],

		// 函数声明不应该在语句块之内
		'no-inner-declarations': ['error', 'functions'],

		// 立即执行函数表达式用圆括号括起来
		'wrap-iife': ['error', 'outside'],

		// 使用严格模式
		'strict': ['error', 'safe'],

		// 总是使用===和!==做比较
		'eqeqeq': ['error', 'always'],

		// 禁止使用eval
		'no-eval': ['error'],

		// 禁止使用原始包装类型
		'no-new-wrappers': ['error'],

		// 数组、对象、函数拖尾逗号：当最后一个元素或属性与闭括号 ] 或 } 在 不同的行时，允许（但不要求）使用拖尾逗号；当在 同一行时，禁止使用拖尾逗号。
		'comma-dangle': ['error', {
			'array': 'only-multiline',
			'objects': 'only-multiline',
			'imports': 'never',
			'exports': 'never',
			'functions': 'only-multiline'
		}]
	}

};
