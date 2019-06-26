

var data = [{
	text: '营销管理',
	iconCls: 'icon-more',
	state: 'close',
	children: [{
		text: '新增销售机会',
		href: 'html/marketing/addChance.html'
	}, {
		text: '查看销售机会',
		href: 'html/marketing/listChance.html'
	}]
}, {
	text: '客户管理',
	iconCls: 'icon-more',
	state: 'close',
	children: [{
		text: '新增客户',
		href:'html/customer/addCustomer.html'
	}, {
		text: '查看客户',
		href: 'html/customer/listCustomer.html'
	}, {
		text: '流失预警',
		href: 'html/customer/escape.html'
	}]
}, {
	text: '服务管理',
	iconCls: 'icon-more',
//	state: 'close',
	state: 'open',
	children: [{
		text: '新增服务',
		href: 'html/service/addService.html'
	}, {
		text: '服务分配',
		href: 'html/service/allotService.html',
	}, {
		text: '处理服务',
		href:'html/service/handleService.html'
	}, {
		text: '服务归档',
		href:'html/service/serviceDone.html'
	}]
}, {
	text: '统计报表',
	iconCls: 'icon-more',
	state: 'close',
	children: [{
		text: '客户贡献分析',
	}, {
		text: '客户构成分析',
	}, {
		text: '客户服务分析',
	}, {
		text: '客户流失分析',
	}]
}, {
	text: '系统管理',
	iconCls: 'icon-more',
	state: 'close',
	children: [{
		text: '待补充',
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