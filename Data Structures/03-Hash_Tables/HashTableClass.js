// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//     // this.data = [];
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }

//   set(key, value) {
//     let address = this._hash(key);
//     if (!this.data[address]) this.data[address] = [];
//     this.data[address].push([key, value]);
//     return this.data;
//   } // O(1)

//   get(key) {
//     let address = this._hash(key);
//     const currentBucket = this.data[address];
//     if (currentBucket.length) {
//       for (let i = 0; i < currentBucket.length; i++) {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][1];
//         }
//       }
//     }
//     return undefined;
//   } // if not collisions O(1)

//   keys() {
//     const keysArr = [];
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i]) {
//         keysArr.push(this.data[i][0]);
//       }
//     }
//     return keysArr;
//   }
// }

// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000);
// myHashTable.set('grapes', 10000);
// myHashTable.get('grapes');
// myHashTable.set('apples', 9);
// myHashTable.get('apples');
// myHashTable.keys();

class HashTable2 {
  constructor(size) {
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];//Should be a linked list
    }
    this.data[address].push([key, value]);// Remove method with linked list
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    console.log(this.data.length);
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable2 = new HashTable2(50);
myHashTable2.set('grapes', 10000);
myHashTable2.set('grapes', 10000);
myHashTable2.get('grapes');
myHashTable2.set('apples', 9);
myHashTable2.get('apples');
myHashTable2.keys();
