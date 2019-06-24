var data = [{
	text: '营销管理',
	iconCls: 'icon-more',
	state: 'open',
	children: [{
		text: '销售机会管理',
	}, {
		text: '客户开发计划管理',
		href: 'html/developPlan.html'
	}]
}, {
	text: '客户管理',
	iconCls: 'icon-more',
	state: 'close',
	children: [{
		text: '新增客户',
	}, {
		text: '查看客户',
		href: 'html/customer.html'
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