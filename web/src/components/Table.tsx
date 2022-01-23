import MaterialTableCore from '@material-table/core';
import { Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

export const Table = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://gist.githubusercontent.com/yashikota/1acd6ebfdcb9008af898ef9cb38f6782/raw/4016b1d6654b1a4b04e0422f410ac46b49e04ea6/oit")
            .then(resp => resp.json())
            .then(resp => {
                setData(resp)
            })
    }, [])

    return (
        <div style={{ maxWidth: '100%' }}>
            <MaterialTableCore
                icons={{ Filter: React.Fragment }}
                columns={[
                    {
                        title: '講義名',
                        field: 'kougi',
                        align: "left",
                        defaultSort: 'asc',
                        headerStyle: {
                            minWidth: 180,
                        },
                    },
                    {
                        title: '年次',
                        field: 'nenji',
                        align: "left",
                        defaultSort: 'asc',
                        type: 'numeric',
                        lookup: { 1: "1年次", 2: "2年次", 3: "3年次", 4: "4年次" }
                    },
                    {
                        title: '期間',
                        field: 'kikan',
                        align: "left",
                        defaultSort: 'asc'
                    },
                    {
                        title: '担当者',
                        field: 'tantousya',
                        align: "left",
                        headerStyle: {
                            minWidth: 190,
                        }
                    },
                    {
                        title: '単位',
                        field: 'tani',
                        align: "left",
                        type: 'numeric',
                        lookup: { 1: "1単位", 2: "2単位", 3: "3単位", 4: "4単位" }
                    },

                    {
                        title: '学部/学科',
                        field: 'gakka',
                        align: "left",
                        lookup: {
                            I: "情報科学部",
                            Q: "工学部共通科目等",
                            C: "都市デザイン工学科",
                            A: "建築学科",
                            M: "機械工学科",
                            E: "電気電子システム工学科",
                            D: "電子情報システム工学科",
                            K: "応用化学科",
                            V: "環境工学科",
                            U: "生命工学科",
                            R: "ロボット工学科",
                            S: "システムデザイン工学科",
                            W: "空間デザイン学科",
                            P: "知的財産学部"
                        }
                    },
                    {
                        title: '講義コード',
                        field: 'numbering',
                        align: "left"
                    },
                    {
                        title: 'リンク',
                        field: 'link',
                        render: row =>
                        <Link
                            href={row.link}
                            target="_balnk">
                            公式シラバスへ
                        </Link>,
                        headerStyle: {
                            minWidth: 100,
                        },
                        filtering: false,
                        sorting: false
                    }
                ]}
                data={data}
                title="OIT Syllabus App"
                options={{
                    paging: false,
                    maxBodyHeight: "95vh",
                    headerStyle: { position: "sticky", top: 0, whiteSpace: 'nowrap' },
                    filterCellStyle: { position: "sticky", top: "54px", backgroundColor: "white"},
                    filtering: true,
                }}
            />
        </div>
    );
}