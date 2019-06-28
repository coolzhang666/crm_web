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
	},{
		text: '服务归档',
		href: 'html/service/serviceDone.html'

	}]
}, {
	text: '统计报表',
	iconCls: 'icon-more',
	state: 'open',
	children: [{
		text: '客户贡献分析',
		href: 'html/statistics/customerContribution.html',
	}, {
		text: '客户构成分析',
		href: 'html/statistics/cusComposition.html'
	}, {
		text: '客户服务分析',
		href: 'html/statistics/analysisCustomerService.html'
	}, {
		text: '客户流失分析',
		href: 'html/statistics/customerLose.html'
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
	$.ajax({
		type:"GET",
		url:"http://localhost:8080/checkOnline",
		success: function(data) {
			if ("1" == data.status) {
				loginObj = data.data;
			} else {
				loginObj = null;
			}
		}
	});
	
	$('#sm').sidemenu({
		onSelect: function(obj) {
			if(loginObj != null) {
				if((loginObj.userRole == '销售主管' || loginObj.userRole =='客户经理' || loginObj.userRole == '系统管理员')) {
					if(loginObj.userRole =='系统管理员'){
//						alert(loginObj.userRole);
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
					
					else if((obj.text == '新增销售机会')&&(loginObj.userRole == '销售主管' || loginObj.userRole=='客户经理')) {
						alert(loginObj.userRole);
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

				} else {
					$.messager.alert("提示", "权限不够，无法操作");
				}
			} else {
				$.messager.alert("提示", "请先登录");
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
			type: "POST",
			url: "http://localhost:8080/login",
			dataType: "JSON",
			data: $("#loginForm").serialize(),
			success: function(data) {
				if("1" == data.status) {
					$("#loginDialog").dialog("close");
					$("#loginForm").form("reset");
					loginObj = data.data;
					document.getElementById("login").innerText = loginObj.userName;
				} else {
					$.messager.alert("提示", data.msg);
				}
			}
		});
	}
}