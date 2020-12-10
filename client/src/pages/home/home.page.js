import React, { useEffect, useState } from 'react';
import CustomLink from '../../components/link/custom_link.component';
import ListTask from '../../components/listtask/list_task.component';
import { addList, deleteList, getAllList, updateList } from './home.action';
import { connect } from 'react-redux';
import { GrAdd } from 'react-icons/gr';
import './home.scss';

const Home = (props) => {
    const [title, setTitle] = useState('');
    const [showInput, setShowInput] = useState(false);
    useEffect(() => {
        props.getAllList();
    }, [props.getAllList]);

    const handleShowInput = () => setShowInput(!showInput);
    const handleTitle = (e) => setTitle(e.target.value);
    const handleAddList = () => {
        if (title !== '') {
            props.addList({ title: title });
            setTitle('');
        }
    };
    return (
        <div className="home">
            <div className="home__header">
                <button
                    className="button home__button"
                    onClick={handleShowInput}
                >
                    new list
                </button>
                <div className={`home__newlist ${showInput ? '' : 'hidden'}`}>
                    <GrAdd onClick={handleAddList} />
                    <input
                        className="home__input"
                        type="text"
                        placeholder="Add List"
                        value={title}
                        onChange={handleTitle}
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                                handleAddList();
                            }
                        }}
                    />
                </div>
            </div>
            <ul className="home__list">
                {props.lists &&
                    props.lists.map((ele, index) => {
                        return (
                            <CustomLink
                                key={index}
                                to={'/lists/' + ele._id}
                                children={<ListTask {...ele} />}
                            />
                        );
                    })}
            </ul>
        </div>
    );
};

const mapStateToProps = ({ HomeReducer }) => ({
    lists: HomeReducer.lists,
});

const mapDispatchToProps = (dispatch) => ({
    getAllList: () => dispatch(getAllList()),
    addList: (list) => dispatch(addList(list)),
    updateList: (list) => dispatch(updateList(list)),
    deleteList: (id) => dispatch(deleteList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
