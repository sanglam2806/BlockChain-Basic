pragma solidity ^0.4.17;
contract Ecommerce {

    address public seller ;
    address[] public buyer;
    address public kyaku;
    struct Item{
        uint id;
        string name;
        string detail;
        uint price;
        bool confirm;
    }
    //luu danh sach cac item
    mapping(uint=>Item) public items;
    //dem so luong cac item duoc them vao
    uint itemCounter;
    
    modifier onlySeller(){
        require(msg.sender== seller );
        _;
    }
    
    event sellItemEvent (
        uint indexed _id,
        string _name,
        uint256 _price
    );
    event buyItemEvent (
        uint indexed _id,
        address indexed _buyer,
        string _name,
        uint256 _price
    );
    
    function Ecommerce() public{
        buyer.push(msg.sender);
        seller= msg.sender;
    }
    
    function  CreateItem (string _name, string _detail, uint _price)public onlySeller{
        itemCounter++;
        //them item moi vao danh sach items 
        items[itemCounter]= Item(itemCounter,_name,_detail,_price,false);
        
         sellItemEvent(itemCounter,_name,_price);
    }
    
    function GetItemForSale() public constant returns (uint[]){
        if(itemCounter==0){
            //neu chua co item nao thi tra ve mang gia tri 0
             return new uint [](0);
        }
        //khai bao mang
        uint [] memory soldCount = new uint[](itemCounter);
        
        uint sold;
        for (uint i=1;i<=itemCounter;i++){
            //ktra cac item da ban
                soldCount[sold]= items[i].id;
                sold++;
        }
        
        return soldCount;
    }
    
    function BuyItem(uint id) public payable{

        //kiem tra 
        //ng ban ko dc mua
        require(msg.sender!= seller);
        //lay thong tin item
        kyaku= msg.sender;
        Item storage itemBuy= items[id];
        //ktra item chua duoc mua
        require(itemBuy.confirm== false);
        //ng mua con du tien de mua
        require(msg.value >= itemBuy.price);
        buyer.push(msg.sender);
        // //chuyen tien toi nguoi ban
        seller.transfer(msg.value);
        
        itemBuy.confirm= true;
        buyItemEvent(id, msg.sender, itemBuy.name, itemBuy.price);
    }
}
