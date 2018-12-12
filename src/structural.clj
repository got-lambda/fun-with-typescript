(defn credit-lookup [{:keys [ssn] :as person}]
  (assoc person :credit (when ssn {:income 2000 :age 42})))

(map credit-lookup
     [{:ssn "1234"}
      {:name "foo"}
      {:ssn "1234" :name "foo"}])
