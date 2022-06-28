var noofOfficers = 60;
var prev="";
function acontrolDiv(id)
{
	var current = id;
	var loopelement;
	
	for(i=1;i<=noofOfficers;i++)
	{
		loopelement = i;
		if(loopelement!=current)
		{
			obj = document.getElementById(i);
			obj.style.display = "none";
		}	
	}
	obj = document.getElementById(id);
	if(obj.style.display == "none")
		obj.style.display = "";
	else
		obj.style.display = "none";
}

function controlDiv(id)
{
	var current = id;
	cobj = document.getElementById(id);

	if(prev!="" && current!=prev)
	{
		pobj = document.getElementById(prev);
		pobj.style.display = "none";
	}

	if(cobj.style.display == "none")
	{
		cobj.style.display = "";
		prev = current;
	}
	else
		cobj.style.display = "none";
}

function expand_menu(curId,idName,nooftabs,gotourl){
	//$("#"+idName+curId).prev().removeClass("plus");
	//$("#"+idName+curId).prev().addClass("minus");
	//$("#"+idName+curId).prev().css({border:'1px solid red'});

	for(i=1;i<=nooftabs;i++)
	{
		var prevTab = $("#"+idName+i);
		if(curId!= i)
		{
			prevTab.hide('slow');
			$("#"+idName+i).prev().removeClass("minus");
			$("#"+idName+i).prev().addClass("plus");
		}
	}
	var curTab = $("#"+idName+curId);
	var flag = curTab.css('display');
	if(flag=='none')
	{
		curTab.show('slow');
		$("#"+idName+curId).prev().removeClass("plus");
		$("#"+idName+curId).prev().addClass("minus");
	}
	else
	{
		curTab.hide('slow');
		$("#"+idName+curId).prev().removeClass("minus");
		$("#"+idName+curId).prev().addClass("plus");
	}

	if(gotourl != "" && gotourl != undefined)
	{
		//alert(gotourl);
		window.location.href= gotourl;
	}
}



function toggleAll()
{
	var loopelement;

	var checkObject = document.getElementById("chkViewAll");

	if(checkObject.checked==true)
	{	
		for(i=1;i<=noofOfficers;i++)
		{
			loopelement = i;	
			obj = document.getElementById(i);
			obj.style.display = "block";			
		}
	}
	else
	{	
		for(i=1;i<=noofOfficers;i++)
		{
			loopelement = i;	
			obj = document.getElementById(i);
			obj.style.display = "none";		
		}
	}

	prev="";
}

function expandmenulist(nos,id)
{
	var noofitems = nos;
	for(i=1;i<=noofitems;i++)
	{
		if (i!=id)
		{
			$('#menu'+i).removeClass('active');
			$('#menu'+i).addClass('blocks');
			$('#submenu'+i).slideUp();
			$('#more'+i).show();
		}
	}
	if (document.getElementById('submenu'+id).style.display =='block')
	{
		$('#menu'+id).removeClass('active');
		$('#menu'+id).addClass('blocks');
		//$('#submenu'+id).slideUp();
		$('#submenu'+id).toggle(500);
		$('#more'+id).show();

	}
	else
	{
		$('#menu'+id).removeClass('blocks');
		$('#menu'+id).addClass('active');
		//$('#submenu'+id).slideDown();
		$('#submenu'+id).toggle(500);
		$('#more'+id).hide();
	}
}
;
