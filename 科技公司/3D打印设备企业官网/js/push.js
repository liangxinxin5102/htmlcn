var menuRight = document.getElementById('cbp-spmenu-s2'),
	showRightPush = document.getElementById('showRightPush'),
	showRightPush2 = document.getElementById('show_bg'),
	body = document.body;
showRightPush.onclick = function () {
    showRightPush2.style.display = "block";
    classie.toggle(this, 'active');
    classie.toggle(body, 'cbp-spmenu-push-toleft');
    classie.toggle(menuRight, 'cbp-spmenu-open');
    disableOther('showRightPush');

};
showRightPush2.onclick = function () {
    classie.toggle(this, 'active');
    classie.toggle(body, 'cbp-spmenu-push-toleft');
    classie.toggle(menuRight, 'cbp-spmenu-open');
    //disableOther('showRightPush');
    showRightPush2.style.display = "none";
};