import { Spin } from 'antd';
import Spinner from 'react-spinner-material';
import { Animation } from './main';


export default function Loading() {
    return (
        <Animation>
            <h1>Loading...</h1>
            <Spin size="large"  />
        </Animation>
    )
}