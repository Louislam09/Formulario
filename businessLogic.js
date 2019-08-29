// LOGICA DE NEGOCIO

var friendList = [];

function addFriendToSystem(pid, pname, pcountry, pbirthday, pemail) {
    var newFriend = {
        id: pid,
        name: pname,
        country: pcountry,
        birthday: pbirthday,
        email: pemail


    };
    console.log(newFriend);

    friendList.push(newFriend);
    localStorageFriendList(friendList);
}

function getFriendList() {
    var storedList = localStorage.getItem('localFriendList');
    if (storedList == null) {
        friendList = [];
    } else {
        friendList = JSON.parse(storedList);
    }
    return friendList;
}

function localStorageFriendList(plist) {
    localStorage.setItem('localFriendList', JSON.stringify(plist));
}






