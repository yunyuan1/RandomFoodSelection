// 定义一个空数组，用于存储从 JSON 文件中读取的数据
var foods = [];

// 使用 fetch API 加载 JSON 文件
fetch('foods.json')
    .then(response => response.json()) // 将响应数据解析为 JSON 格式
    .then(data => {
        // 将解析后的数据存储在 foods 数组中
        foods = data;
    })
    .catch(error => {
        console.error('数据加载失败：', error);
    });

// 筛选数据的函数
function filterFoods(hasSoup) {
    // 根据用户选择筛选数据
    var filteredFoods = foods.filter(function(food) {
        return food.soup === hasSoup;
    });

    // 输出筛选后的数据
    console.log(filteredFoods);
}
