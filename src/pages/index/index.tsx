import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

import TaroRichText from '../../components/rich-text/richIndex';

export default class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  };

  state = {
    startTime: new Date().getTime(),
    endTime: new Date().getTime() + 20000
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  tickHandler(time) {
    console.log(time);
  }

  timeupHandler() {
    console.log('timeup');
  }

  render() {
    return (
      <View className="index">
        <TaroRichText
          htmls={`访问内容<span class="highlight"><a appid="495ec7a9-a3e8-42ad-a1ee-f14b8e0af1e3" pagepath="pages/renderer/renderer">活动线上预约报名啦啦啦</a></span>
  `}
        />
      </View>
    );
  }
}
