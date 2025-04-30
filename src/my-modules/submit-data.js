// Cloud Firestoreにデータを送信する
export const submitData = async (e, addDoc, collection, db) => {

  // 送信イベントの自動イベント→ページリロード・遷移をキャンセル
  e.preventDefault();
  const formData = new FormData(e.target);

  try {

    // addDocのコレクションの引数も初期化したオブジェクト(firestore)とそこに存在するコレクション名と、ドキュメントデータを設定
    const docRef = await addDoc(collection(db, "reports"), {
      date: new Date(),
      name: formData.get("name"),
      work: formData.get("work"),
      comment: formData.get("comment")
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}