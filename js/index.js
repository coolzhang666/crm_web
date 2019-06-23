var data = [{
	text: '客户管理',
	iconCls: 'icon-more',
	state: 'open',
	children: [{
		text: '新增客户',
	}, {
		text: '查看客户',
	}, {
		text: '新增客户联系人',
	}, {
		text: '查看客户联系人',
	}]
}, {
	text: '用户管理',
	iconCls: 'icon-more',
	children: [{
		text: '用户登录',
	}, {
		text: '设置权限'
	}]
}, {
	text: '图标统计',
	children: [{
		text: '客户区域统计图',
	}]
}, {
	text: '销售管理',
	iconCls: 'icon-more',
	children: [{
		text: '销售系统',
	}, {
		text: '查询销售记录',
	}]
}];

$(document).ready(function() {
	$('#sm').sidemenu({
		onSelect: function(obj) {
			var tabt = $('#tt').tabs('getTab', obj.text);
			if(tabt == null) {
				$('#tt').tabs('add', {
					title: obj.text,
					closable: true,
					href: obj.href,
				});
			} else {
				$('#tt').tabs('select', obj.text);
			}
		}
	});
});