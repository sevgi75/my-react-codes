let currentUser = 0;
console.log(currentUser);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
const request = StatusCodes.Success;
var Tshirts;
(function (Tshirts) {
    Tshirts["Small"] = "S";
    Tshirts["Medium"] = "M";
    Tshirts["Large"] = "L";
})(Tshirts || (Tshirts = {}));
let size = Tshirts.Large;
var Tshirts2;
(function (Tshirts2) {
    Tshirts2["Small"] = "S";
    Tshirts2["Medium"] = "M";
    Tshirts2["Large"] = "L";
    Tshirts2[Tshirts2["XLarge"] = 42] = "XLarge";
    Tshirts2[Tshirts2["XXlarge"] = 43] = "XXlarge";
    Tshirts2[Tshirts2["XXXLarge"] = 46] = "XXXLarge";
    Tshirts2[Tshirts2["XXXXLarge"] = 47] = "XXXXLarge";
})(Tshirts2 || (Tshirts2 = {}));
