const PRODUCT_NAME = [
    'Nike Air Force 1 NDESTRUKT',
    'Nike Space Hippie 04',
    'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
    'Nike Blazer Low 77 Vintage',
    'Nike Blazer Low 77 Vintage37 A.I.R. Chaz Bear',
    'test777',
    'test888',
    'test999'
];

const PRODUCT_SUBNAME = [
    'test1',
    'test2',
    'test3',
    'test4',
    'test5',
    'test6',
    'test7',
    'test8'
];


export const LatestCourseTest = [...Array(8)].map((_, index) => {
    const setIndex = index + 1;

    return {
        cover: `/assessment/image-${setIndex}.png`,
        title: PRODUCT_NAME[index],
        subtitle: PRODUCT_SUBNAME[index],
        date: 'Until 3 October, 2024',
    };
});
