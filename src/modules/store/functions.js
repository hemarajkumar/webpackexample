export default {
    gatCategoryTitle (title, state) {
        let getTitle = (state) => {
            for (let value of Object.values(state["lists"])) {
                if (value.name == title) {
                    return ({'title':value.title, 'id':value.id});
                }
            }
        }
        let _catetoryTitle = getTitle(state);
            
        if (_catetoryTitle == undefined){
            return ({'title': 'There\'s no category section. Please check the URL entered', 'id': ''});
        } else {
            return ({'title': _catetoryTitle.title, 'id': _catetoryTitle.id});
        }
    },

    gatCategoryId (title, state){
        let getId = (state) => {
            for (let value of Object.values(state["lists"])) {
                if (value.name == title) {
                    return value.id
                }
            }
        }
        let _catetoryId = getId(state);
        if (_catetoryId == undefined){
            return '';
        } else {
            return _catetoryId;
        }
    },

    getlistProducts (state, _categoryId) {
        let productList = state;
        let productArray = [];
        let categoryTitle = [];

        for (let value of Object.values(productList["lists"])) {
            let childObject = {};
            childObject["Title"] = value.Title;
            childObject["id"] = value.id;
            let listobj = {};
            for (let list of Object.values(value.list)) {
              listobj = {};
              listobj["id"] = list.id;
              listobj["name"] = list.name;
              listobj["price"] = list.price;
              listobj["image"] = list.image;
              listobj["roundelImg"] = list.roundelImg;
              listobj["color"] = list.color;
              listobj["wasprice"] = list.wasprice;
              listobj["quantity"] = list.quantity;
              let productId = list.id;
              switch (_categoryId) {
                case 'viewall':
                  productArray.push(listobj);
                  break;
                case 'sales':
                  if (list.roundelImg) {
                    productArray.push(listobj);
                  }
                  break;
                default:
                  if (productId.includes(_categoryId) && (_categoryId != '')) {
                    productArray.push(listobj);
                  }
              }
            }
            categoryTitle.push(childObject);
          }
        return productArray;
    }
}