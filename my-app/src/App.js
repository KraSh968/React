import React, {useMemo, useState} from 'react';
import Counter from './components/Counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './Styles/App.css'
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import img1 from "./img/300x450.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import img4 from "./img/4.jpg"
import img5 from "./img/5.jpg"
import img6 from "./img/6.jpg"


import CommenItem from "./components/CommenItem";
import CommentForm from "./components/CommentForm";

function App() {
  const [posts, setPosts] = useState([
          {
              id: 1,
              title: 'Зеленая миля',
              body: 'Обвиненный в страшном преступлении, Джон Коффи оказывается в блоке смертников тюрьмы «Холодная гора». Вновь прибывший обладал поразительным ростом и был пугающе спокоен, что, впрочем, никак не влияло на отношение к нему начальника блока Пола Эджкомба, привыкшего исполнять приговор.',
              img: img1,
              rating: "9.1"
          },
          {
              id: 2,
              title: 'Побег из Шоушенка',
              body: 'Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения.',
              img: img2,
              rating: "8.9"
          },
          {
              id: 3,
              title: 'Властелин колец: Возвращение короля',
              body: 'Последняя часть трилогии о Кольце Всевластия и о героях, взявших на себя бремя спасения Средиземья. Повелитель сил Тьмы Саурон направляет свои бесчисленные рати под стены Минас-Тирита, крепости Последней Надежды. Он предвкушает близкую победу, но именно это и мешает ему заметить две крохотные фигурки — хоббитов, приближающихся к Роковой Горе, где им предстоит уничтожить Кольцо Всевластия. Улыбнется ли им счастье',
              img: img3,
              rating: "8.6"
          },
          {
              id: 4,
              title: 'Список Шиндлера',
              body: 'Лента рассказывает реальную историю загадочного Оскара Шиндлера, члена нацистской партии, преуспевающего фабриканта, спасшего во время Второй мировой войны более тысячи ста евреев. Это триумф одного человека, не похожего на других, и драма тех, кто, благодаря ему, выжил в ужасный период человеческой истории.',
              img: img4,
              rating: "8.8"
          },
          {
              id: 5,
              title: 'Форрест Гамп',
              body: 'Маленького Фореста воспитывает мать, у него не только проблемы с позвоночником, но и с развитием, он слабоумный, ранимый и добрый мальчик, но мать его очень любит. В школе он подружился с девочкой Дженни, она была его единственным другом. Форест очень быстро бегал, и когда в очередной раз за ним гнались хулиганы, он нечаянно выбежал на футбольное поле, где его скорость увидел тренер Пол Брайант, так Форест стал студентом. Он играл в футбол так, что стал одним из лучших игроков.',
              img: img5,
              rating: "8.9"
          },
          {
              id: 6,
              title: '1+1',
              body: 'Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, — молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.',
              img: img6,
              rating: "8.8"
          },
  ])



    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);



    const sortedPost = useMemo(() => {
        if (filter.sort) {
            console.log(filter.query)
                return [...posts].sort((a, b) => b[filter.sort].localeCompare(a[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
      return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPost])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
      setModal(false)
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }



  return (
    <div className="App">
        <MyButton style={{marginTop: '50px'}} onClick={() => setModal(true)}>
            Создать фильм
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title = 'Список фильмов'/>
    </div>
  );
}

export default App;
