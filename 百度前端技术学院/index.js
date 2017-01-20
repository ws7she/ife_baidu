function move() {
    var tag = document.getElementById("tag");
    var val;
    var btn = document.getElementById("update");
    btn.onclick = function () {
        val = document.getElementById("inp_val").value;
        var topNow = parseInt(tag.style.top);
        var leftNow = 2;
        var whirl = tag.style.transform.replace(/[^0-9]/ig,"");
        tag.style.top = (topNow - 100) + "px"
        tag.style.transform = "rotate("+ whirl-90 +"deg)";
        console.log(whirl-90, tag.style.transform);
        // if (topNow > 1 && leftNow > 1) {
        //     if (val == "GO") {
        //         tag.style.top = (topNow - 100) + "px"
        //     } else if (val == "TUN LEF") {
        //         tag.style.transform = "rotate( "+ whirl-90 +"deg)";
        //     } else if (val == "TUN RIG") {
        //         // tag.style.transform = "rotate(-90deg)"
        //     } else if (val == "TUN BAC") {

        //     }
        // }

    }
}
move()