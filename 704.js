var search = function(nums, target) {
    var left = 0;
    var right = nums.length-1;

    while (left <= right) {
        var middle = Math.floor((left + right) / 2);
        var current = nums[middle];
        if (current < target ) {
            left = middle + 1;
        } else if (current > target) {
            right = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
};
