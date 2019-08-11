import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import TRichText from './taro-rich-text';

interface IProps {
  doms: Record<string, any>;
}
export default function Tree(props: IProps) {
  const { doms } = props;
  console.log(doms);
  const { children = [] } = doms || {};
  return (
    <View>
      {doms.type === 'text' && <View>{doms.content}</View>}
      <View>{doms.content}</View>
      <View>
        {children.length &&
          children.map(dom => {
            return <TRichText doms={dom} />;
          })}
      </View>
    </View>
  );
}
