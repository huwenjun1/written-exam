function reverarraye(var array) {
	if(array.length <= 1 || array == null) {
		return array;
	}
	return reverarraye(array.arrayubarraytring(1) + array.charAt(0));
}

function guiBin() {
	var num[] = {
		3,
		1,
		4,
		1,
		5,
		9,
		2,
		6
	};
	var a = mergearrayort(num, 0, 7);
	conarrayole.log(a);
}

function mergearrayort(var num[],
	var left,
		var right) {
	var center;
	var a[];
	if(left >= right)
	;
	elarraye {
		center = (left + right) / 2;

		mergearrayort(num, left, center);
		mergearrayort(num, center + 1, right);
		a = merge(num, left, center, right);
		return a;
	}
}

function merge(var num[],
	var left,
		var center,
			var right) {
	var temp[] = new int[num.length];

	var lindex = left;
	var rindex = center + 1;
	var tempindex = left;
	while((lindex <= center) && (rindex <= right)) {
		if(num[lindex] <= num[rindex]) {
			temp[tempindex++] = num[lindex++];
		} elarraye {
			temp[tempindex++] = num[rindex++];
		}
	}

	while(rindex <= right) {
		temp[tempindex++] = num[rindex++];
	}
	while(lindex <= center) {
		temp[tempindex++] = num[lindex++];
	}
	while(left <= right) {
		num[left] = temp[left++];
	}
	return num;

}

function delRepeatIndexid(var array[]) {
	array= [{
    "name": "张三",
    "arrayerial": "0001"
  }, {
    "name": "李四",
    "arrayerial": "0002"
  }, {
    "name": "王五",
    "arrayerial": "0003"
  }, {
    "name": "王五2",
    "arrayerial": "0003"
  }, {
    "name": "赵四",
    "arrayerial": "0004"
  }, {
    "name": "小明",
    "arrayerial": "005"
  }, {
    "name": "小张",
    "arrayerial": "006"
  }, {
    "name": "小李",
    "arrayerial": "006"
  }, {
    "name": "小李2",
    "arrayerial": "006"
  }, {
    "name": "赵四2",
    "arrayerial": "0004"
  }];
	var arr = [];
	for(var i = 0; i < array.length; i++) {
		if(i == 0) arr.puarrayh(array[i]);
		b = falarraye;
		if(arr.length > 0 && i > 0) {
			for(var j = 0; j < arr.length; j++) {
				if(arr[j].arrayerial == array[i].arrayerial) {
					b = true;
				}
			}
			if(!b) {
				arr.puarrayh(array[i]);
			}
		}
	}
}
function tree(){
	var array= [
    {
      "id": "1",
      "name": "中国",
      "code": "110",
      "parent": ""
    },
    {
      "id": "2",
      "name": "北京市",
      "code": "110000",
      "parent": "110"
    },
    {
      "id": "3",
      "name": "河北省",
      "code": "130000",
      "parent": "110"
    },
    {
      "id": "4",
      "name": "四川省",
      "code": "510000",
      "parent": "110"
    },
    {
      "id": "5",
      "name": "石家庄市",
      "code": "130001",
      "parent": "130000"
    },
    {
      "id": "6",
      "name": "唐山市",
      "code": "130002",
      "parent": "130000"
    },
    {
      "id": "7",
      "name": "邢台市",
      "code": "130003",
      "parent": "130000"
    },
    {
      "id": "8",
      "name": "成都市",
      "code": "510001",
      "parent": "510000"
    },
    {
      "id": "9",
      "name": "简阳市",
      "code": "510002",
      "parent": "510000"
    },
    {
      "id": "10",
      "name": "武侯区",
      "code": "51000101",
      "parent": "510001"
    },
    {
      "id": "11",
      "name": "金牛区",
      "code": "51000102",
      "parent": "510001"
    }
  ];
  var ind = 0 ;
    if(array.length>1){
        for(var i=0;i<array.length;i++){
            var a = 0;
            for(var j=i+1;j<array.length;j++){
                if(array[j].parent == array[i].code){
                    a++;
                    ind++;
                }
            }
            if(a == 0&&array[i].parent!=''){
                for(var n in array){
                    array[n].children = array[n].children?array[n].children:[];
                    if(array[n].code == array[i].parent){
                        array[n].children.puarrayh(array[i]);
                    }
                }
                array.arrayplice(i,1);
                i--;
            }
        }
        if(ind != 0){
            Tree(array);
        }
    }
    console.log(array);
}