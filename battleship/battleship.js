function statrt() {
    var startBtn = document.getElementsByTagName("a");
    startBtn[0].onclick = function(){
       return play()? false : true;
    }
}

function play() {

    // 战舰位置
    var randomLoc = Math.floor(Math.random() * 5);
    var location1 = randomLoc;
    var location2 = location1 + 1;
    var location3 = location2 + 1;

    // 存储用户猜测
    var guess;
    // 存储击中次数
    var hits = 0;
    // 存储猜测次数
    var guesses = 0;


    // 记录战舰是否被击沉
    var isSunk = false;

    // 只要战舰未被击沉
    while (isSunk == false) {
        // 获取用户输入
        guess = prompt("Ready, aim, fire! (enter a number 0-6):");
        // 如果用户点击了取消，显示提示语句，终止循环，退出游戏
        if (guess == null) {
            alert("You quit! You pussy!");
            break;
        } else {
            // 检验用户输入是否合法
            if (guess < 0 || guess > 6) {
                alert("Please enter a valid cell number!");
            } else {
                guesses++;
                // 判断是否击中
                // 优化前
                // if (guess == location1) {
                //     hits++;
                // } else if (guess == location2) {
                //     hits++;
                // } else if (guess == location3) {
                //     hits++;
                // }
                // 优化后
                if (guess == location1 || guess == location2 || guess == location3) {
                    alert("HIT!");
                    hits++;
                    // 检查是否击中了3次
                    if (hits === 3) {
                        isSunk = true;
                        alert("you sank my battleship!");
                        // 统计信息
                        var stats = "You took " + guesses + " guesses to sink the battleship, " 
                            + "which means your shooting accuracy was "+ (3/guesses);
                        alert(stats);
                    }
                } else {
                    alert("MISS...");
                }
            }
        }
    }
    return true;
}

window.onload = statrt();