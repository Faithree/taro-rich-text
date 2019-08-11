import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import TRichText from './taro-rich-text';
import { parse } from 'html-parse-stringify';
interface IProps {
  htmls: string;
}
export default function Index(props: IProps) {
  const ast = parse(props.htmls || '');
  return (
    <View>
      {ast.length &&
        ast.map(dom => {
          return <TRichText doms={dom} key={Math.random() * Math.random()} />;
        })}
    </View>
  );
}
