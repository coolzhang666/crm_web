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
		href: 'html/customer/addCustomer.html'
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
	state: 'close',
	children: [{
		text: '新增服务',
		href: 'html/service/addService.html'
	}, {
		text: '服务分配',
		href: 'html/service/allotService.html'
	}, {
		text: '处理服务',
		href: 'html/service/handleService.html'
	}, {
		text: '服务反馈',
		href: 'html/service/feedBackService.html'
	}, {
		text: '服务归档',
		href: 'html/service/serviceDone.html'
	}]
}, {
	text: '统计报表',
	iconCls: 'icon-more',
	state: 'open',
	children: [{
		text: '客户贡献分析',
		href: 'statistics/customerContribution.html',
	}, {
		text: '客户构成分析',
		href:'html/statistics/cusComposition.html'
	}, {
		text: '客户服务分析',
		href:'html/statistics/analysisCustomerService.html'
	}, {
		text: '客户流失分析',
		href:'html/statistics/customerLose.html'
	}]
}, {
	text: '系统管理',
	iconCls: 'icon-more',
	state: 'close',
	children: [{
		text: '待补充',
		href: 'html/system/demo.html'
	}]
}];

var loginObj;

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

	$("#login").click(function() {
		$("#loginForm").form("reset");
		$("#loginDialog").dialog("open");
	});
});

function login() {
	var validate = $("#loginForm").form("validate");
	if(validate) {
		$.ajax({
			type:"GET",
			url:"http://localhost:8080/user/1",
			success: function(data) {
				$("#loginDialog").dialog("close");
				$("#loginForm").form("reset");
				$.messager.alert("提示", data.msg);
				loginObj = data.data;
				document.getElementById("login").innerText = loginObj.userName;
			}
		});
	}
}