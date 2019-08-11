import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import TRichTextCopy from './taro-rich-text-copy';

// interface IProps {
//   options: TreeData;
//   value: Partial<TreeData>;
//   // 选中的匹配key 默认id
//   nodeKey: string;
//   onSelect?: (node: TreeData) => void;
//   onExpand?: (node: TreeData) => void;
// }
interface IProps {
  doms: Record<string, any>;
  // value: Partial<TreeData>;
  // // 选中的匹配key 默认id
  // nodeKey: string;
  // onSelect?: (node: TreeData) => void;
  // onExpand?: (node: TreeData) => void;
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
            return <TRichTextCopy doms={dom} />;
          })}
      </View>
    </View>
  );
}
