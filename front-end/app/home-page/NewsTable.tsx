/*
 * @Date: 2025-02-03 22:24:39
 * @LastEditors: Aregene
 * @LastEditTime: 2025-02-03 22:24:52
 */
// app/components/NewsTable.tsx
import { Table, Tag } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import { useEffect, useState } from 'react';

interface NewsItem {
    link: string;
    id: number;
    abstract: string;
    category: string;
    date: string;
    title: string;
}

const NewsTable: React.FC = () => {
    const [data, setData] = useState<NewsItem[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/news');
                const newsData = await response.json();
                setData(newsData);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    const columns: ColumnProps<NewsItem>[] = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text, record) => (
                <a href={record.link} target="_blank" rel="noopener noreferrer">
                    {text}
                </a>
            ),
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            render: (category) => <Tag color="blue">{category}</Tag>,
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Abstract',
            dataIndex: 'abstract',
            key: 'abstract',
        },
    ];

    return (
        <Table columns={columns} dataSource={data} rowKey="id" />
    );
};

export default NewsTable;
