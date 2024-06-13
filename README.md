# Basic components
<View />
    // 容器组件，相当于 <div></div>，
    // 但是对于内容超出容器高度的情况是不能滚动的
    // 默认使用 flexbox 布局

<ScrollView />   
    // 可滚动的容器组件，
    // 一次会渲染所有节点，适合数据不多的滚动

<FlatList />
    // 可滚动的容器组件，
    // 懒加载结点，适合长列表

<Text/>
    // 文本组件，负责展示文本。
    // 注意在 RN 中，文本必须被 Text 组件包裹

<Button title= "name" onPress={onPressHandler}/>
    // 按钮，按钮的文本通过 title 属性赋值。
    // 此外，RN 中点击事件是 onPress 而不是 onClick。

<TextInput onChangeText={onChangeText} value={text}/>
    // 输入框

<Image source={} />
    // 图片，本地图片使用 require 引入，网络图片通过 uri 属性引入


<Modal visible={isVisible}/>
    //Modal 组件是一种简单的覆盖在其他视图之上显示内容的方式
    //animationType 指定modal动画类型包括：slide 从底部滑入滑出；fade 淡入淡出；none 没有动画，直接蹦出来。