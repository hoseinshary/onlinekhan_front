import { LocalStorage } from "quasar";
import router from "src/router";
import axios from "src/plugins/axios";
import ISubMenu from "src/models/ISubMenu";

/**
 * map all value of source object to dest object
 * @param {Object} cloneFrom
 * @param {Object} cloneTo
 */
const mapObject = function(
  cloneFrom: object,
  cloneTo: object,
  ...ignoreKeys: Array<string>
) {
  Object.keys(cloneTo).forEach(key => {
    if (ignoreKeys.indexOf(key) > -1) {
      return;
    }

    if (cloneFrom[key] !== undefined) {
      if (isObject(cloneFrom[key]) && cloneTo[key]) {
        mapObject(cloneFrom[key], cloneTo[key]);
      } else {
        cloneTo[key] = cloneFrom[key];
      }
    }
  });
};

/**
 * return new object
 * @param {Object} obj
 */
const cloneObject = function(obj: object) {
  return JSON.parse(JSON.stringify(obj));
  //Object.assign({}, obj)
};

/**
 * clear value of object
 * @param {Object} obj
 */
const clearObject = function(obj: object) {
  Object.keys(obj).forEach(key => {
    if (isObject(obj[key])) {
      clearObject(obj[key]);
    } else {
      obj[key] = undefined;
    }

    // if (isString(obj[key])) {
    //   obj[key] = '';
    // } else if (isNumber(obj[key])) {
    //   // obj[key] = 0;
    //   obj[key] = undefined;
    // } else if (isBoolean(obj[key])) {
    //   //obj[key] = false;
    //   obj[key] = undefined;
    // } else if (isArray(obj[key])) {
    //   clearArray(obj[key]);
    // } else if (isObject(obj[key])) {
    //   clearObject(obj[key]);
    // } else {
    //   obj[key] = undefined;
    // }
  });
};

/**
 * clear array
 * @param {Array} arr
 */
const clearArray = function<T>(arr?: Array<T>) {
  if (arr) {
    arr.splice(0, arr.length);
  }
};

/**
 * turn an object into query string parameters
 * @param {Object} obj
 */
const toParam = function(obj: object): string {
  return encodeURI(toParamWithoutEncode(obj));
};

const toParamWithoutEncode = function(obj: object) {
  return Object.keys(obj)
    .map(key => {
      var value = obj[key];
      if (isObject(value)) {
        return toParam(value);
      }
      if (isArray(value)) {
        return value.map(x => key + "=" + x).join("&");
      }
      return key + "=" + value;
    })
    .join("&");
};

/**
 * access to nested object by string
 * @param {*} theObject
 * @param {String} path
 */
const getNested = function(theObject: object, path: string) {
  try {
    var separator = ".";
    return path
      .replace("[", separator)
      .replace("]", "")
      .split(separator)
      .reduce(function(obj, property) {
        return obj[property];
      }, theObject);
  } catch (err) {
    return undefined;
  }
};

const convertFileToBase64 = function(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result || "");
    reader.onerror = error => reject(error);
  });
};

/**
 * check type value be string
 * @param {*} value
 */
const isString = function(value: any) {
  return typeof value === "string" || value instanceof String;
};

/**
 * check type value be array
 * @param {*} value
 */
const isNumber = function(value: any) {
  return typeof value === "number" && isFinite(value);
};

/**
 * check type value be array
 * @param {*} value
 */
const isArray = function(value: any) {
  return value && typeof value === "object" && value.constructor === Array;
};

/**
 * check type value be object
 * @param {*} value
 */
const isObject = function(value: any) {
  return value && typeof value === "object" && value.constructor === Object;
};

/**
 * check type value be boolean
 * @param {*} value
 */
const isBoolean = function(value: any) {
  return typeof value === "boolean";
};

//   isNull(value) {
//     return value === null;
//   },
//   isUndefined(value) {
//     return typeof value === 'undefined';
//   },
//   isFunction(value) {
//     return typeof value === 'function';
//   },
//   isRegExp(value) {
//     return value && typeof value === 'object' && value.constructor === RegExp;
//   },
//   isError(value) {
//     return value instanceof Error && typeof value.message !== 'undefined';
//   },
//   isDate(value) {
//     return value instanceof Date;
//   },
//   isSymbol(value) {
//     return typeof value === 'symbol';
//   }

/**
 * handle logout
 */
const logout = function() {
  LocalStorage.remove("authList");
  LocalStorage.remove("menuList");
  LocalStorage.remove("subMenuList");
  LocalStorage.remove("Token");
  LocalStorage.remove("FullName");
  axios.defaults.headers.common["Token"] = "";
  router.push("/user/login");
};

/**
 * گرفتن دسترسی
 */
const getAccess = function(modelName: string) {
  var subMenuList = LocalStorage.get.item("subMenuList") as Array<ISubMenu>;
  var item = subMenuList.find(x => x.FaName == modelName);

  if (item) {
    return item.UserAccess;
  } else {
    return [];
  }
};

/**
 * convert flatten list to tree
 * @param {array} list
 * @param {string} key
 * @param {string} parentKey
 */
const listToTree = function(
  list: any,
  key: string,
  parentKey: string,
  childrenSortKey: string = ""
) {
  var map = {},
    node: any,
    roots: any = [],
    i: number;
  for (i = 0; i < list.length; i += 1) {
    map[list[i][key]] = i; // initialize the map
    list[i].children = []; // initialize the children
    list[i].parent = null; // initialize the parent
  }

  let currentNode: any = null;
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node[parentKey] !== null) {
      // if you have dangling branches check that map[node.parentId] exists
      currentNode = list[map[node[parentKey]]];
      currentNode.children.push(node);
      if (childrenSortKey) {
        currentNode.children = currentNode.children.sort(
          (x, y) => x[childrenSortKey] - y[childrenSortKey]
        );
      }
      node.parent = currentNode;
      // if (node.parent !== null) {
      //   delete node.parent.children;
      // }
    } else {
      roots.push(node);
    }
  }
  return roots;
};

/**
 * search through tree
 * @param {array} array
 * @param {string} key
 * @param {string} value
 */
const searchTreeArray = function<T>(
  array: Array<T>,
  key: string,
  value: string
) {
  var parentNode = null;
  for (let i = 0; parentNode == null && i < array.length; i++) {
    parentNode = searchTree(array[i], key, value);
  }
  return parentNode;
};

const searchTree = function(element: any, key: string, value: string) {
  if (element[key] == value) {
    return element;
  } else if (element.children != null) {
    var result = null;
    for (let i = 0; result == null && i < element.children.length; i++) {
      result = searchTree(element.children[i], key, value);
    }
    return result;
  }
  return null;
};

/**
 * convert tree to list
 * @param root
 */
const treeToList = function(root: any) {
  var stack: Array<any> = [],
    array: Array<any> = [],
    hashMap = {};
  stack.push(root);

  while (stack.length !== 0) {
    var node = stack.pop();
    if (node.children === null || node.children.length == 0) {
      visitNode(node, hashMap, array);
    } else {
      for (var i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i]);
      }
    }
  }
  return array;
};

function visitNode(node: any, hashMap: object, array: Array<any>) {
  if (!hashMap[node.Id]) {
    hashMap[node.Id] = true;
    if (node.Checked)
      array.push({
        Id: node.Id,
        CountOfEasy: node.CountOfEasy,
        CountOfMedium: node.CountOfMedium,
        CountOfHard: node.CountOfHard
      });
  }
}

function enumToArray(enumObject: any) {
  return Object.keys(enumObject).reduce((arr: Array<any>, key: string) => {
    if (!arr.includes(key)) {
      arr.push(enumObject[key]);
    }
    return arr;
  }, []);
}

function enumToDdl(enumObject: any) {
  return enumToArray(enumObject).map(x => ({
    label: x,
    value: enumObject[x]
  }));
}

function enumToDdl2(enumObject: any) {
  return enumToArray(enumObject).map(x => ({
    label: enumObject[x].toString(),
    value: enumObject[x]
  }));
}

/**
 * export data
 */
export default {
  mapObject,
  cloneObject,
  clearObject,
  clearArray,
  toParam,
  getNested,
  isString,
  isNumber,
  isArray,
  isObject,
  isBoolean,
  logout,
  getAccess,
  listToTree,
  searchTreeArray,
  treeToList,
  enumToDdl,
  enumToDdl2,
  convertFileToBase64
};
