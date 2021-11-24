import * as C from './styles'
import { Item } from '../../types/Item'
import { TableItem } from '../TableItem'


type Props = {
    list: Item[];
    onRemove: (item: Item) => void;
}


export const TableArea = ({ list, onRemove }: Props) => {

    const removeItem = (item: Item) => {
        onRemove(item)
    }

    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                    <C.TableHeadColumn width={10}></C.TableHeadColumn>
                </tr>
            </thead>

            <tbody>
                {list.map((item, index) => (
                    <TableItem deleteItem={removeItem} key={index} item={item}/>
                ))}
            </tbody>
        </C.Table>
    );
}